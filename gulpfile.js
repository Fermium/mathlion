require('babel-register')({
  presets: ['es2015']
});

var _ = require('lodash');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');
var Rsync = require('rsync');
var Promise = require('bluebird');
var eslint = require('gulp-eslint');
var rimraf = require('rimraf');
var fs = require('fs');
var glob = require('glob');

var zip = require('gulp-zip');
var aws = require('aws-sdk');

var pkg = require('./package.json');

// relative location of Kibana install
var pathToKibana = '../kibana';

var buildDir = path.resolve(__dirname, 'build/kibana');
var packageRoot = path.resolve(__dirname, 'build');

var targetDir = path.resolve(__dirname, 'target');
var buildTarget = path.resolve(buildDir, pkg.name);
var kibanaPluginDir = path.resolve(__dirname, pathToKibana, 'plugins', pkg.name);


var include = [
  'package.json',
  'index.js',
  'node_modules',
  'functions'
];
var exclude = Object.keys(pkg.devDependencies).map(function (name) {
  return path.join('node_modules', name);
});

function syncPluginTo(dest, done) {
  mkdirp(dest, function (err) {
    if (err) return done(err);
    Promise.all(include.map(function (name) {
      var source = path.resolve(__dirname, name);
      return new Promise(function (resolve, reject) {
        var rsync = new Rsync();
        rsync
          .source(source)
          .destination(dest)
          .flags('uav')
          .recursive(true)
          .set('delete')
          .exclude(exclude)
          .output(function (data) {
            process.stdout.write(data.toString('utf8'));
          });
        rsync.execute(function (err) {
          if (err) {
            console.log(err);
            return reject(err);
          }
          resolve();
        });
      });
    }))
    .then(function () {
      done();
    })
    .catch(done);
  });
}

gulp.task('sync', function (done) {
  syncPluginTo(kibanaPluginDir, done);
});

gulp.task('lint', function () {
  var filePaths = [
    'gulpfile.js',
    'functions/**/*.js'
  ];

  return gulp.src(filePaths)
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.formatEach())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint'], function () {
  gutil.log(gutil.colors.red('Nothing to test...'));
});

gulp.task('clean', function (done) {
  Promise.each([buildDir, targetDir], function (dir) {
    return new Promise(function (resolve, reject) {
      rimraf(dir, function (err) {
        if (err) return reject(err);
        resolve();
      });
    });
  }).nodeify(done);
});

gulp.task('build', ['clean'], function (done) {
  syncPluginTo(buildTarget, done);
});

gulp.task('package', ['build'], function (done) {
  function writePackages(versions, done) {
    if (!versions.length) { done(); return; }

    // Write a new version so it works with the Kibana package manager
    var editable = _.cloneDeep(pkg);
    editable.version = versions.shift();
    require('fs').writeFileSync(buildTarget + '/' + 'package.json', JSON.stringify(editable, null, '  '));

    var archiveName = editable.name  + '-' + editable.version + '.zip';

    gulp.src(path.join(packageRoot, '**', '*'))
      .pipe(zip(archiveName))
      .pipe(gulp.dest(targetDir))
      .on('end', function () {
        gutil.log('Packaged', archiveName);
        writePackages(versions, done);
      });
  }

  // Write one archive for every supported kibana version, plus one with the actual timelion version

  writePackages(pkg.kibanas.concat([pkg.version]), done);
});

gulp.task('release', ['package'], function (done) {
  function upload(files, done) {
    if (!files.length) { done(); return; }

    var filename = _.last(files.shift().split('/'));
    var s3 = new aws.S3();
    var params = {
      Bucket: 'download.elasticsearch.org',
      Key: 'kibana/timelion-random/' + filename,
      Body: fs.createReadStream(path.join(targetDir, filename))
    };
    s3.upload(params, function (err, data) {
      if (err) return done(err);
      gutil.log('Finished', gutil.colors.cyan('uploaded') + ' Available at ' + data.Location);
      upload(files, done);
    });
  }

  glob(targetDir + '/*.zip', function (err, files) {
    upload(files, done);
  });
});

gulp.task('dev', ['sync'], function () {
  gulp.watch(['package.json', 'index.js', 'functions/**/*'], ['sync', 'lint']);
});
