<a href="https://fermiumlabs.com/">
    <img src="https://fermiumlabs.com/Assets/img/logos/Horizontal-Main_500px.png" alt="Fermium LABS logo" width="200" align="right" />
</a>

# Mathlion

[![Build Status](https://travis-ci.org/fermiumlabs/mathlion.svg?branch=master)](https://travis-ci.org/fermiumlabs/mathlion) [![Code Climate](https://codeclimate.com/github/fermiumlabs/mathlion/badges/gpa.svg)](https://codeclimate.com/github/fermiumlabs/mathlion) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e3dffaf9691048cc926cc80721b8750e)](https://www.codacy.com/app/d_2/mathlion?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fermiumlabs/mathlion&amp;utm_campaign=Badge_Grade) [![Analytics](https://ga-beacon.appspot.com/UA-69533556-3/mathlion/readme/?flat)](https://github.com/igrigorik/ga-beacon) [![Join the chat at https://gitter.im/fermiumlabs/mathlion](https://badges.gitter.im/fermiumlabs/mathlion.svg)](https://gitter.im/fermiumlabs/mathlion?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


![logo](logo.png)

Mathlion is a Kibana extension that enables equation parsing and advanced math under Timelion.
Check out what it can do in the [documentation](http://mathlion.docs.fermiumlabs.com/)

### Installation

Copy the last installation url for your version of Kibana from [the repository releases](https://github.com/fermiumlabs/mathlion/releases/latest). The file follows the naming `mathlion-major.minor.patch_for_kibana-major.minor.patch.zip` where the first version is the one of mathlion, the second version indicated it's the one in Kibana.

Remember that starting from Kibana 5.0 you always need an update version of every plugin for it to start as indicated [here](https://siren.solutions/in-kibana-5-all-your-plugins-will-break-at-each-and-every-update/).

```sh
#Kibana >= 5.x

./bin/kibana-plugin install  https://github.com/fermiumlabs/mathlion/releases/download/version_name/mathlion-major.minor.patch_for_kibana-major.minor.patch.zip

#Kibana 4
./bin/kibana --install mathlion -u https://github.com/fermiumlabs/mathlion/releases/download/version_name/mathlion-0.2.0_for_kibana-4.X.zip
```

### Examples

```js
.es(*).math("a=source")  //the variable "a" now contains the elasticsearch query.
.nop().math("a")  //this row now equals the former elasticsearch query

.es(*).math("source") //return the .es(*) query
.es(*).math("source+5") // add 5 to the .es(*) query

.nop().math("a=a+2 ; a=a+3 ")  //adds 5 to a
.nop().math("a=a+2 ; a=a+3 ; a ")  //adds 5 to a and displays a+5

.es(*).math("a=source")  //this query is invisible and does not generate an axis
.es(*).math("a=source; a")  //this query does

.nop.math("sqrt(3^2 + 4^2)") //returns 5

//Calculate power comsumption based on measured current and stimated voltage (in Europe)
.nop().math("electricPower(v,i)=(v*i)")
.es(metric=avg:current).math(machineCurrent=source)
.nop().math("elascPower(230,machineCurrent)")

//plot the horizontal statistical mean and variance
.es(*).math("me=mean(source); va=var(source)")
.value(1).math(me*source) 
.value(1).math("(me+sqrt(va))*source") 
.value(1).math("(me-sqrt(va))*source")

```

## Supported Kibana versions

This plugin is supported by:

* Kibana 5
* Kibana 4.x (check out branch [backport-4](https://github.com/fermiumlabs/mathlion/tree/backport-4))

We regularly test only for Kibana 5. If you find bugs on Kibana 4 you can open a issue, but we would prefer a pull request.

## Features:

* Full-featured math in Timelion
* Variables and custom functions
* Physical constants
* Units of measurement

For upcoming features and TODOs check [here](https://github.com/fermiumlabs/mathlion/projects).

---

<a href="https://twitter.com/intent/user?screen_name=fermiumlabs">
    <img src="https://img.shields.io/twitter/follow/fermiumlabs.svg?style=social&label=Follow" alt="Follow Fermium LABS on Twitter" align="right" />
</a>

