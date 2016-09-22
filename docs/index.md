# Mathlion

Mathlion is a Kibana extension that enables equation parsing and advanced math under Timelion, which is part of Kibana.

Mathlion is developed by [Fermium LABS](https://fermiumlabs.com/)

## Usage

### .math()

Function | Description                                  | Type
:------- | :------------------------------------------- | :--------
`math()` | Parse mathematical equations and expressions | Chainable

Examples:

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

As you may have understood, `source` inside a mathematical expression returns the value of the precedent function. It acts as a local variable, and never exit the boundaries of the function you write it in.

The variable will now be accessible from the `math()` functions. Internally every variable is considered a mathematical array. 

When you're working in Timelion each variable will be accessible from the whole Timelion sheet you're working in. Beware that you need to start a new chain for the variable to be accessible.

In Kibana dashboards variables are separated between plots.

```js
//this works
.es(*).math("a=source") 
.nop().math("a")

//Error: Undefine symbol a
.es(*).math("a=source").math("a") //the two functions can't see each other

//A better solution
.es(*).math("a=source; a") 
```

### .nop()

Function | Description                                                                                      | Type
:------- | :----------------------------------------------------------------------------------------------- | :---------
`.nop()` | A fake datasource that returns no value at all. It's similar to `.value(0)` | Datasource

Examples:

```js
.nop() //returns nothing at all
.nop().math(variable) //retrieve variable
```

### Equations examples

You can do farly complex stuff inside a math function:

```js
mode(a) //compute the mode of the whole set of data in "a" in your window and display it as an y axis
(a>0) ? (a=1) : (a=-1) //if is positive a=1, else a=-1\. A will be modified only temporarely for this equation

delta(a,b,c)=(b^2-4*a*c) //create a new function you can reuse

a=2; a=a+1 // a is now 3, the sub-expressions are evaluated sequentially The last is the one considered in the end 
a=1 ; a=2; a+1 // exactly same as before, but returns directly 3 instead of a=3

```


# Reference

* [Physical constants](constants.md)
* [Mathematical functions](functions/index.md)
* [Mathematical operators](operators.md)
* [Units of measurement](functions.md)

# Thanks

Mathlion is based on [Math.js](http://mathjs.org)
