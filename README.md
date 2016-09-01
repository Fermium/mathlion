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

Upcoming features:

* Full math functions with syntax such as `.es(query).math("this*2")`
* Treat with units conversion `.es(query).math("this to Kw")`
* Save variables `.es(current).math(i=this).hide(), .es(voltage).assign(v=this).hide()`
* Retrieve and elaborate on variables `.math(power=(v*i))` or `.math(v*i).label(power)`
* Fast vector math
* Thernary conditions, various test operators
* String to number
* Scientific costants, trigonometry etc etc.
* Easily import other statistical and math functions in a similar way to the one Timelion uses, but instead allowing them to be used inside math equations


## 
