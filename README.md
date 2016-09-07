[![Code Climate](https://codeclimate.com/github/fermiumlabs/mathlion/badges/gpa.svg)](https://codeclimate.com/github/fermiumlabs/mathlion) [![Test Coverage](https://codeclimate.com/github/fermiumlabs/mathlion/badges/coverage.svg)](https://codeclimate.com/github/fermiumlabs/mathlion/coverage)
# Mathlion

Mathlion enables equation parsing and advanced math in Timelion for kibana

## Installing
Until Mathlion is release, to install it you have to:

1. cd to your `kibana/plugins` or `kibana/installedPlugins` directory. Only one of those will exist depending on your Kibana version.
2. `wget https://github.com/fermiumlabs/mathlion/archive/master.zip`
3. `unzip master.zip`
4. `rm kibana-random-master/gulpfile.js` (This is a dev environment thing. Kibana won't start if you don't remove `gulpfile.js`)
4. Start kibana (and delete that master.zip if you want, or not, it won't break anything)

## Supported Kibana versions

This plugin is supported by Kibana 5 alpha, and will be backported to Kibana 4.

## Features

#### Working features:

* Full math functions with syntax such as `.es(query).math("this*2")` or `.es(query).math(this*2)`
* Save variables `.es(current).math-assing(i).hide(), .es(voltage).math-assign("v").hide()` both with or without quotes 
* Retrieve and elaborate on variables `.nop().math(v*i,label="power")` or `.es(current).math(v*this)`
* Scientific costants, trigonometry etc etc.
* Fast vector math

#### Upcoming features:

* Treat with units conversion `.es(query).math("this to Kw")`
* Thernary conditions, various test operators
* String to number
* Easily import other statistical and math functions in a similar way to the one Timelion uses, but instead allowing them to be used inside math equations

## THINGS TO DO

* Find a way to instance separate scope for every plot
