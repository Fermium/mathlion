[![Build Status](https://travis-ci.org/fermiumlabs/mathlion.svg?branch=master)](https://travis-ci.org/fermiumlabs/mathlion) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/fermiumlabs/Lobby)
 [![Code Climate](https://codeclimate.com/github/fermiumlabs/mathlion/badges/gpa.svg)](https://codeclimate.com/github/fermiumlabs/mathlion) [![Test Coverage](https://codeclimate.com/github/fermiumlabs/mathlion/badges/coverage.svg)](https://codeclimate.com/github/fermiumlabs/mathlion/coverage)

# Mathlion

Mathlion is a Kibana extension that enables equation parsing and advanced math under Timelion.
Check out what it can do in the [documentation](http://mathlion.docs.fermiumlabs.com/)

## Supported Kibana versions

This plugin is supported by Kibana 5 alpha.

## Features:

* Full math functions with syntax such as `.es(query).math("this*2")` or `.es(query).math(this*2)`
* Save variables `.es(current).math-assing(i).hide(), .es(voltage).math-assign("v").hide()` both with or without quotes 
* Thernary conditions, various test operators
* Retrieve and elaborate on variables `.nop().math(v*i,label="power")` or `.es(current).math(v*this)`
* Scientific costants, trigonometry etc etc.
* Fast vector math

For upcoming features and todos check [here](https://github.com/fermiumlabs/mathlion/projects).
