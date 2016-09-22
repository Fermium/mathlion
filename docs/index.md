# Mathlion

Mathlion is a Kibana extension that enables equation parsing and advanced math under Timelion, which is part of Kibana.

Mathlion is developed by [Fermium LABS](https://fermiumlabs.com/)

## Usage

### .math-assign()

Function         | Description                                           | Type
:--------------- | :---------------------------------------------------- | :--------
`.math-assign()` | Assign the value of the current series to a variable. | Chainable

Examples:

```js
.es(*).math-assign("a") 
.es(*).math-assign("myvariable")
```

The variable will now be accessible from the `math()` functions. Internally every variable is considered a mathematical array. 

When you're working in Timelion each variable will be accessible from the whole Timelion sheet you're working in.
In Kibana dashboards variables are separated between plots.

### .nop()

Function | Description                                                                                      | Type
:------- | :----------------------------------------------------------------------------------------------- | :---------
`.nop()` | A fake datasource that returns no value at all. It's similar to `.value(0)` | Datasource

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

As you may have understood, `this` inside a mathematical expression returns the value of the precedent function. It acts as a local variable, and never exit the boundaries of the function you write it in.

You can do farly complex stuff inside a math function:

```js
mode(a) //compute the mode of the whole set of data in "a" in your window and display it as an y axis
(a>0) ? (a=1) : (a=-1) //if is positive a=1, else a=-1\. A will be modified only temporarely for this equation
a=1 ; a=2; a=a+1 // a is now 3, the sub-expressions are evaluated sequentially. The last is the one considered in the end 
a=1 ; a=2; a+1 // exactly same as before, but returns directly 3 instead of a=3
```


# Reference

* [Physical constants](constants.md)
* [Mathematical functions](functions.md)
* [Mathematical operators](operators.md)
* [Units of measurement](functions.md)

# Thanks

Mathlion is based on [Math.js](http://mathjs.org)
