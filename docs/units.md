## Advanced unit usage

Example usage:

```js
a = unit(45, 'cm') // Unit 450 mm
b = unit('0.1 kilogram') // Unit 100 gram
c = unit('2 inch') // Unit 2 inch
d = unit('90 km/h') // Unit 90 km/h
e = unit('101325 kg/(m s^2)') // Unit 101325 kg / (m s^2)
```

```js
a = unit(55, 'cm') // Unit 550 mm
b = unit('0.1 kilogram') // Unit 100 gram
c = unit('2 inch') // Unit 100 millimeter

d = c.to('cm') // Unit 5.08 cm
number(b, 'gram') // Number 100
```

Use care when creating a unit with multiple terms in the denominator. Implicit multiplication has the same operator precedence as explicit multiplication and division, which means these three expressions are identical:

```js
// These three are identical
correct1 = unit('8.314 m^3 Pa / mol / K') // Unit 8.314 (m^3 Pa) / (mol K)
correct2 = unit('8.314 (m^3 Pa) / (mol K)') // Unit 8.314 (m^3 Pa) / (mol K)
correct3 = unit('8.314 (m^3 * Pa) / (mol * K)') // Unit 8.314 (m^3 Pa) / (mol K)
```

But this expression, which omits the second `/` between `mol` and `K`, results in the wrong value:

```js
// Missing the second '/' between 'mol' and 'K'
incorrect = unit('8.314 m^3 Pa / mol K') // Unit 8.314 (m^3 Pa K) / mol
```

## Calculations

The operations that support units are `add`, `subtract`, `multiply`, `divide`, `pow`, `abs`, `sqrt`, `square`, `cube`, and `sign`. Trigonometric functions like `cos` are also supported when the argument is an angle.

```js
a = unit(45, 'cm') // Unit 450 mm
b = unit('0.1m') // Unit 100 mm
add(a, b) // Unit 0.65 m
multiply(b, 2) // Unit 200 mm

c = unit(45, 'deg') // Unit 45 deg
cos(c) // Number 0.7071067811865476

// Kinetic energy of average sedan on highway
d = unit('80 mi/h') // Unit 80 mi/h
e = unit('2 tonne') // Unit 2 tonne
f = multiply(0.5, multipy( pow(d, 2), e)) // 1.2790064742399996 MJ
```

Operations with arrays are supported too:

```js
// Force on a charged particle moving through a magnetic field
B = eval('[1, 0, 0] T') // [1 T, 0 T, 0 T]
v = eval('[0, 1, 0] m/s') // [0 m / s, 1 m / s, 0 m / s]
q = eval('1 C') // 1 C

F = multiply(q, cross(v, B)) // [0 N, 0 N, -1 N]
```

Please note that in mathlion, differently from the implementation in math.js **every variable is an array**.

All arithmetic operators act on the value of the unit as it is represented in SI units. This may lead to surprising behavior when working with temperature scales like `celsius` (or `degC`) and `fahrenheit` (or `degF`). In general you should avoid calculations using `celsius` and `fahrenheit`. Rather, use `kelvin` (or `K`) and `rankine` (or `R`) instead. This example highlights some problems when using `celsius` and `fahrenheit` in calculations:

```js
T_14F = unit('14 degF') // Unit 14 degF (263.15 K)
T_28F = multiply(T1, 2) // Unit 487.67 degF (526.3 K), not 28 degF

Tnegative = unit(-13, 'degF') // Unit -13 degF (248.15 K)
Tpositive = abs(T1) // Unit -13 degF (248.15 K), not 13 degF

Trate1 = eval('5 (degC/hour)') // Unit 5 degC/hour
Trate2 = eval('(5 degC)/hour') // Unit 278.15 degC/hour
```

The expression parser supports units too. This is described in the section about units on the page [Syntax](../expressions/syntax.md#units).

## User-Defined Units

You can add your own units to js using the `createUnit` function. The following example defines a new unit `furlong`, then uses the user-defined unit in a calculation:

```js
 createUnit('furlong', '220 yards')
 eval('1 mile to furlong') // 8 furlong
```

If you cannot express the new unit in terms of any existing unit, then the second argument can be omitted. In this case, a new base unit is created:

```js
// A 'foo' cannot be expressed in terms of any other unit.
 createUnit('foo')
 eval('8 foo * 4 feet') // 32 foo feet
```

The second argument to `createUnit` can also be a configuration object consisting of the following properties:

- **definition** A `string` or `Unit` which defines the user-defined unit in terms of existing built-in or user-defined units. If omitted, a new base unit is created.
- **prefixes** A `string` indicating which prefixes js should use with the new unit. Possible values are `'none'`, `'short'`, `'long'`, `'binary_short'`, or `'binary_long'`. Default is `'none'`.
- **offset** A value applied when converting to the unit. This is very helpful for temperature scales that do not share a zero with the absolute temperature scale. For example, if we were defining fahrenheit for the first time, we would use: `createUnit('fahrenheit', {definition: '0.555556 kelvin', offset: 459.67})`
- **aliases** An array of strings to alias the new unit. Example: `createUnit('knot', {definition: '0.514444 m/s', aliases: ['knots', 'kt', 'kts']})`

An optional `options` object can also be supplied as the last argument to `createUnits`. Currently only the `override` option is supported:

```js
// Redefine the mile (would not be the first time in history)
 createUnit('mile', '1609.347218694', {override: true}})
```

Base units created without specifying a definition cannot be overridden.

### Return Value

`createUnit` returns the created unit, or, when multiple units are created, the last unit created. Since `createUnit` is also compatible with the expression parser, this allows you to do things like this:

```js
('45 mile/hour to createUnit("knot", "0.514444m/s")') // 39.103964668651976 knot
```
