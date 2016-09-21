[![Build Status](https://travis-ci.org/fermiumlabs/mathlion.svg?branch=master)](https://travis-ci.org/fermiumlabs/mathlion) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/fermiumlabs/Lobby)
 [![Code Climate](https://codeclimate.com/github/fermiumlabs/mathlion/badges/gpa.svg)](https://codeclimate.com/github/fermiumlabs/mathlion) [![Test Coverage](https://codeclimate.com/github/fermiumlabs/mathlion/badges/coverage.svg)](https://codeclimate.com/github/fermiumlabs/mathlion/coverage)

# Mathlion

Mathlion is a Kibana extension that enables equation parsing and advanced math under Timelion.
Check out the [documentation](http://mathlion.readthedocs.io/)

## Usage

### .math-assign()

Function         | Description                                           | Type
:--------------- | :---------------------------------------------------- | :--------
`.math-assign()` | Assign the value of the current series to a variable. | Chainable

It's a function.

Examples:

```js
.es(*).math-assign("a") 
.es(*).math-assign("myvariable")
```

### .nop()

Function | Description                                                                                      | Type
:------- | :----------------------------------------------------------------------------------------------- | :---------
`.nop()` | A fake datasource that returns no value at all. It's similar to `.value(0)` but more clean | Datasource

Examples:

```js
.nop() //returns nothing at all
.nop().math(variable) //retrieve variable
```

### .math()

Function | Description                                  | Type
:------- | :------------------------------------------- | :--------
`math()` | Parse mathematical equations and expressions | Chainable

Examples:

```js
.es(*).math-assign("a")
.nop().math("a")  //this row now equals the former one
.es(*).math("this") //return the .es(*) query
.es(*).math("this+5") // add 5 to the .es(*) query
.nop.math("sqrt(3^2 + 4^2)") //returns 5
```

As you may have understood, `this` inside the mathematical expression returns the value of the precedent function. It acts as a local variable, and never exit the boundaries of the function you write it in.

You can do farly complex stuff inside a math function:

```js
mode(a) //compute the mode of the whole set of data in "a" in your window and display it as an y axis
(a>0) ? (a=1) : (a=-1) //if is positive a=1, else a=-1\. A will be modified only temporarely for this equation
a=1 ; a=2; a=a+1 // a is now 3, the sub-expressions are evaluated sequentially. The last is the one considered in the end 
a=1 ; a=2; a+1 // exactly same as before, but returns directly 3 instead of a=3
```

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
