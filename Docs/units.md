## units

In Mathlion you can assign units to any number of variables. Once you have assigned a unit you must keep working with units on that variables, you cannot go unitless.

Mathlion automatically keeps track of the units and convert between different ones.


Example usage:

```js
.math("5")
.math("5 cm")
.math("a = (5cm)")
.math("a") // 5cm

//converting is easy
.math("a to inch") // 1.9685039370078743 inch

//keeps automatically track of composite units
.math("5kg * 2m^2") //10 kg m^2


// you cannot add a unitless number to a variable with unit
.math("a+2") //ERROR
.math("a+ 2cm") //OK
```

**WARNING:** When using units you should always convert to unit at least one time at the end of the math expression, otherwise mathlion will display mixed units but tell you only about one. It's a bug.

Use care when creating a unit with multiple terms in the denominator. Implicit multiplication has the same operator precedence as explicit multiplication and division, which means these three expressions are identical:

```js
// These three are identical
math("8.314 m^3 Pa / mol / K") // Unit 8.314 (m^3 Pa) / (mol K)
math("8.314 (m^3 Pa) / (mol K)") // Unit 8.314 (m^3 Pa) / (mol K)
math("8.314 (m^3 * Pa) / (mol * K)") // Unit 8.314 (m^3 Pa) / (mol K)
```

But this expression, which omits the second `/` between `mol` and `K`, results in the wrong value:

```js
// Missing the second "/" between "mol" and "K"
incorrect = unit("8.314 m^3 Pa / mol K") // Unit 8.314 (m^3 Pa K) / mol
```

## Calculations

The operations that support units are `add`, `subtract`, `multiply`, `divide`, `pow`, `abs`, `sqrt`, `square`, `cube`, and `sign`. Trigonometric functions like `cos` are also supported when the argument is an angle.

```js
math("45cm") // Unit 450 mm
math("0.1m") // Unit 100 mm
math("a+b") // Unit 0.65 m

math("45 deg") // Unit 45 deg
cos(c) // Number 0.7071067811865476

// Kinetic energy of average sedan on highway
math("d = (80 mi/h)") // Unit 80 mi/h
math("e = (2 tonne)") // Unit 2 tonne
math("0.5 * d^2 * e") // 1.2790064742399996 MJ
```

Please note that in mathlion, differently from the implementation in math.js **every variable is an array**.

All arithmetic operators act on the value of the unit as it is represented in SI units. This may lead to surprising behavior when working with temperature scales like `celsius` (or `degC`) and `fahrenheit` (or `degF`). In general you should avoid calculations using `celsius` and `fahrenheit`. Rather, use `kelvin` (or `K`) and `rankine` (or `R`) instead. This example highlights some problems when using `celsius` and `fahrenheit` in calculations:

```js
math("T1= (14 degF)") // Unit 14 degF (263.15 K)
math("T_28F=(T1*2)") // Unit 487.67 degF (526.3 K), not 28 degF

math("Tnegative =-13degF") // Unit -13 degF (248.15 K)
math("Tpositive= abs(T1)") // Unit -13 degF (248.15 K), not 13 degF

math("5 (degC/hour)") // Unit 5 degC/hour
math("(5 degC)/hour") // Unit 278.15 degC/hour
```

## User-Defined Units

You can add your own units using the `createUnit` function. The following example defines a new unit `furlong`, then uses the user-defined unit in a calculation:

```js
 createUnit("furlong", "220 yards")
 eval("1 mile to furlong") // 8 furlong
```

If you cannot express the new unit in terms of any existing unit, then the second argument can be omitted. In this case, a new base unit is created:

```js
// A "foo" cannot be expressed in terms of any other unit.
 createUnit("foo")
 eval("8 foo * 4 feet") // 32 foo feet
```

The second argument to `createUnit` can also be a configuration object consisting of the following properties:

- **definition** A `string` or `Unit` which defines the user-defined unit in terms of existing built-in or user-defined units. If omitted, a new base unit is created.
- **prefixes** A `string` indicating which prefixes js should use with the new unit. Possible values are `"none"`, `"short"`, `"long"`, `"binary_short"`, or `"binary_long"`. Default is `"none"`.
- **offset** A value applied when converting to the unit. This is very helpful for temperature scales that do not share a zero with the absolute temperature scale. For example, if we were defining fahrenheit for the first time, we would use: `createUnit("fahrenheit", {definition: "0.555556 kelvin", offset: 459.67})`
- **aliases** An array of strings to alias the new unit. Example: `createUnit("knot", {definition: "0.514444 m/s", aliases: ["knots", "kt", "kts"]})`

An optional `options` object can also be supplied as the last argument to `createUnits`. Currently only the `override` option is supported:

```js
// Redefine the mile (would not be the first time in history)
 createUnit("mile", "1609.347218694", {override: true}})
```

Base units created without specifying a definition cannot be overridden.

### Return Value

`createUnit` returns the created unit, or, when multiple units are created, the last unit created. Since `createUnit` is also compatible with the expression parser, this allows you to do things like this:

```js
("45 mile/hour to createUnit("knot", "0.514444m/s")") // 39.103964668651976 knot
```
