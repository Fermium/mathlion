<a href="https://fermiumlabs.com/">
    <img src="https://fermiumlabs.com/wp-content/uploads/2019/02/Horizontal-Main_500px.png" alt="Fermium LABS logo" width="200" align="right" />
</a>

# Mathlion

[![Build Status](https://travis-ci.org/fermiumlabs/mathlion.svg?branch=master)](https://travis-ci.org/fermiumlabs/mathlion) [![Github Releases (by Release)](https://img.shields.io/github/downloads/fermiumlabs/mathlion/total.svg)](https://github.com/fermiumlabs/mathlion/releases/latest)

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

## How to update (for developers)

If you need to update mathlion for a new Kibana release:

1. Add your version to package.json, inside "kibanas".
2. Inside travis.yml add an "ELASTIC_VERSION" environmental variable with the latest version of kibana.
3. commit your changes
4. run `npm version patch`

## How to request an update (for users)

If you need to update mathlion for a new Kibana release:

1. Add your version to package.json, inside "kibanas". Be sure to write correct Json. You can validate it [Here](https://jsonlint.com/)
2. Inside travis.yml add your version [Here](https://github.com/fermiumlabs/mathlion/blob/master/.travis.yml#L16)
3. open a Pull request against Master

If you need it urgently, write to support@fermiumlabs.com

---

<a href="https://twitter.com/intent/user?screen_name=fermiumlabs">
    <img src="https://img.shields.io/twitter/follow/fermiumlabs.svg?style=social&label=Follow" alt="Follow Fermium LABS on Twitter" align="right" />
</a>
