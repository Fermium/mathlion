# timelion-random

This is an example plugin for timelion that implements both a `datasource` and a `chainable` function. Both are well, useless, and serve entirely to demonstrate how to create a plugin for timelion.

### .random(min, max)
`.random()` is a `datasource` function that produces random numbers between `min` and `max`. Like I said, pretty useless right? 

### .shuffle()
`.shuffle()` is a `chainable` function that can be run to shuffle the points in a series, producing a series in which the points are the same as before, but appear in a random order

## Installing
As this is an example, I don't publish package for it, but installing directly from Github is fairly simple:

1. cd to your `kibana/plugins` or `kibana/installedPlugins` directory. Only one of those will exist depending on your Kibana version. 
2. `wget https://github.com/rashidkpc/timelion-random/archive/master.zip`
3. `unzip master.zip`
4. `rm kibana-random-master/gulpfile.js` (This is a dev environment thing. Kibana won't start if you don't remove `gulpfile.js`)
4. Start kibana (and delete that master.zip if you want, or not, it won't break anything)

## Creating Timelion plugins
If you've ever created a Kibana plugin before, this is going to be old hat. Otherwise:

1. Setup a [Kibana development environment](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md#development-environment-setup) and start it up. This isn't technically required, but will make your life easier. Otherwise you're going to have to bounce Kibana each time you make a change.
2. Install [timelion](https://github.com/elastic/timelion)
3. Clone this repo to a directory that is a sibling of your kibana directory. Eg `timelion-random/` and `kibana/` should be on the same level of the directory tree
4. `mv timelion-random timelion-myplugin`
3. `cd timelion-myplugin`
4. Update `package.json` and change `name` to `timelion-myplugin`
5. `npm install`
6. `npm start`

You can now start making changes. The plugin development environment will take care of syncing your changes. The main points of interest are:

- `functions/random.js`
- `functions/shuffle.js`
- `index.js` *Note: If you make any changes to `index.js` you will need to bounce the kibana dev environment.*

### Packaging your plugin
Depending on what kibana version you need a plugin for there are 2 branches in this repo, `master` and `4.x` both have a `gulp package` command that will package your plugin correctly and put it in the `target/` directory. 

#### For Kibana 5
If you're packaging a Kibana 5 plugin you will need to update the `kibanas` array in `package.json` to match the 5.x versions of Kibana you are targeting

#### For Kibana 4
`git checkout 4.x`. The only real difference between the 2 branches is the `gulpfile.js` that contains a different `gulp package` task and the lack of a `kibanas` array in `package.json`

Enjoy
