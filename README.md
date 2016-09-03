[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/fermiumlabs/Lobby)
 [![Code Climate](https://codeclimate.com/github/fermiumlabs/mathlion/badges/gpa.svg)](https://codeclimate.com/github/fermiumlabs/mathlion) [![Test Coverage](https://codeclimate.com/github/fermiumlabs/mathlion/badges/coverage.svg)](https://codeclimate.com/github/fermiumlabs/mathlion/coverage)

# Mathlion

Mathlion enables equation parsing and advanced math in Timelion for kibana

## Usage

### .math-assign()

Function         | Description                                           | type
:--------------- | :---------------------------------------------------- | :--------
`.math-assign()` | assign the value of the current series to a variable. | chainable

It's a function.

Examples:

```sh
.es(*).math-assign("a") 
.es(*).math-assign("myvariable")
```

### .nop()

Function | Description                                                                                      | type
:------- | :----------------------------------------------------------------------------------------------- | :---------
`.nop()` | return only zeroes withouth messing with the axis label. It's similar to `.value(0)` but cleaner | datasource

Examples:

```sh
.nop() #returns nothing at all
.nop().add(1).label(useless axis) #write an y axis called "useless axis" with y=1
```

### .math()

Function | Description                                  | type
:------- | :------------------------------------------- | :--------
`math()` | parse mathematical equations and expressions | chainable

Examples:

```sh
.es(*).math-assign("a")
.nop().math("a")  #this row now equals the former one
.es(*).math("this") #return the .es(*) query
.es(*).math("this+5") # add 5 to the .es(*) query
.nop.math("sqrt(3^2 + 4^2)") #returns 5
.es(@metal_pipe_lenght_inches).math("this inch to m") #converts your query from inches to meters
.es(@metal_pipe_lenght_inches).math("to(this inch, m)") #converts your query from inches to meters, but using a function instead of an operator
```

As you may have understood, `this` inside the mathematical expression returns the value of the precedent function. It acts as a local variable, and never exit the boundaries of the function you write it in.

You can do farly complex stuff inside a math function:

```sh
number(this) #will convert this from a string/boolean to a number
mode(a) #compute the mode of the whole set of data in "a" in your window and display it as an y axis
(a>0) ? (a=1) : (a=-1) #if is positive a=1, else a=-1\. A will be modified only temporarely for this equation
a=1 ; a=2; a=a+1 # a is now 3, the sub-expressions are evaluated sequentially. The last is the one really considere in the end 
a=1 ; a=2; a+1 # exactly same as before, but returns directly 3 instead of a=3
```

## Supported Kibana versions

This plugin is supported by Kibana 5 alpha, and will be backported to Kibana 4.

## Installing

Until Mathlion is released, to install it you have to:

1. cd to your `kibana/plugins` or `kibana/installedPlugins` directory. Only one of those will exist depending on your Kibana version.
2. `wget https://github.com/fermiumlabs/mathlion/archive/master.zip`
3. `unzip master.zip`
4. `rm kibana-random-master/gulpfile.js` (This is a dev environment thing. Kibana won't start if you don't remove `gulpfile.js`)
5. Start kibana (and delete that master.zip if you want, or not, it won't break anything)

## TODO

- Solve issues with scalar to vector math (solution is to replace number with number*ones(...) but need a smart way to do that)
- Find a way to instance separate scope for every plot
- Explain in what order the function run
- move description into a nice-looking table
- Import phisical costants
- Grammar error checking, impaginations...
