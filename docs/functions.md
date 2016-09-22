# Supported functions of .math()

## Construction functions

Function | Description
---- | -----------
[bignumber(x)](functions/bignumber.md) | Create a BigNumber, which can store numbers with arbitrary precision.
[boolean(x)](functions/boolean.md) | Create a boolean or convert a string or number to a boolean.
[chain(value)](functions/chain.md) | Wrap any value in a chain, allowing to perform chained operations on the value.
[complex(re,&nbsp;im)](functions/complex.md) | Create a complex value or convert a value to a complex value.
[createUnit(units)](functions/createUnit.md) | Create a user-defined unit and register it with the Unit type.
[fraction(numerator,&nbsp;denominator)](functions/fraction.md) | Create a fraction convert a value to a fraction.
[index(range1,&nbsp;range2,&nbsp;...)](functions/index.md) | Create an index.
[matrix(x)](functions/matrix.md) | Create a Matrix.
[number(value)](functions/number.md) | Create a number or convert a string, boolean, or unit to a number.
[sparse(x)](functions/sparse.md) | Create a Sparse Matrix.
[splitUnit(unit,&nbsp;parts)](functions/splitUnit.md) | Returns an array of units whose sum is equal to this unit.
[string(value)](functions/string.md) | Create a string or convert any object into a string.
[unit(x)](functions/unit.md) | Create a unit.

## Algebra functions

Function | Description
---- | -----------
[lsolve(L,&nbsp;b)](functions/lsolve.md) | Solves the linear equation system by forwards substitution.
[lup(A)](functions/lup.md) | Calculate the Matrix LU decomposition with partial pivoting.
[lusolve(A,&nbsp;b)](functions/lusolve.md) | Solves the linear system `A * x = b` where `A` is an [n x n] matrix and `b` is a [n] column vector.
[slu(A,&nbsp;order,&nbsp;threshold)](functions/slu.md) | Calculate the Sparse Matrix LU decomposition with full pivoting.
[usolve(U,&nbsp;b)](functions/usolve.md) | Solves the linear equation system by backward substitution.

## Arithmetic functions

Function | Description
---- | -----------
[abs(x)](functions/abs.md) | Calculate the absolute value of a number.
[add(x,&nbsp;y)](functions/add.md) | Add two values, `x + y`.
[cbrt(x&nbsp;[,&nbsp;allRoots])](functions/cbrt.md) | Calculate the cubic root of a value.
[ceil(x)](functions/ceil.md) | Round a value towards plus infinity If `x` is complex, both real and imaginary part are rounded towards plus infinity.
[cube(x)](functions/cube.md) | Compute the cube of a value, `x * x * x`.
[divide(x,&nbsp;y)](functions/divide.md) | Divide two values, `x / y`.
[dotDivide(x,&nbsp;y)](functions/dotDivide.md) | Divide two matrices element wise.
[dotMultiply(x,&nbsp;y)](functions/dotMultiply.md) | Multiply two matrices element wise.
[dotPow(x,&nbsp;y)](functions/dotPow.md) | Calculates the power of x to y element wise.
[exp(x)](functions/exp.md) | Calculate the exponent of a value.
[fix(x)](functions/fix.md) | Round a value towards zero.
[floor(x)](functions/floor.md) | Round a value towards minus infinity.
[gcd(a,&nbsp;b)](functions/gcd.md) | Calculate the greatest common divisor for two or more values or arrays.
[hypot(a,&nbsp;b,&nbsp;...)](functions/hypot.md) | Calculate the hypotenusa of a list with values.
[lcm(a,&nbsp;b)](functions/lcm.md) | Calculate the least common multiple for two or more values or arrays.
[log(x&nbsp;[,&nbsp;base])](functions/log.md) | Calculate the logarithm of a value.
[log10(x)](functions/log10.md) | Calculate the 10-base logarithm of a value.
[mod(x,&nbsp;y)](functions/mod.md) | Calculates the modulus, the remainder of an integer division.
[multiply(x,&nbsp;y)](functions/multiply.md) | Multiply two values, `x * y`.
[norm(x&nbsp;[,&nbsp;p])](functions/norm.md) | Calculate the norm of a number, vector or matrix.
[nthRoot(a)](functions/nthRoot.md) | Calculate the nth root of a value.
[pow(x,&nbsp;y)](functions/pow.md) | Calculates the power of x to y, `x ^ y`.
[round(x&nbsp;[,&nbsp;n])](functions/round.md) | Round a value towards the nearest integer.
[sign(x)](functions/sign.md) | Compute the sign of a value.
[sqrt(x)](functions/sqrt.md) | Calculate the square root of a value.
[square(x)](functions/square.md) | Compute the square of a value, `x * x`.
[subtract(x,&nbsp;y)](functions/subtract.md) | Subtract two values, `x - y`.
[unaryMinus(x)](functions/unaryMinus.md) | Inverse the sign of a value, apply a unary minus operation.
[unaryPlus(x)](functions/unaryPlus.md) | Unary plus operation.
[xgcd(a,&nbsp;b)](functions/xgcd.md) | Calculate the extended greatest common divisor for two values.

## Bitwise functions

Function | Description
---- | -----------
[bitAnd(x,&nbsp;y)](functions/bitAnd.md) | Bitwise AND two values, `x & y`.
[bitNot(x)](functions/bitNot.md) | Bitwise NOT value, `~x`.
[bitOr(x,&nbsp;y)](functions/bitOr.md) | Bitwise OR two values, `x | y`.
[bitXor(x,&nbsp;y)](functions/bitXor.md) | Bitwise XOR two values, `x ^ y`.
[leftShift(x,&nbsp;y)](functions/leftShift.md) | Bitwise left logical shift of a value x by y number of bits, `x << y`.
[rightArithShift(x,&nbsp;y)](functions/rightArithShift.md) | Bitwise right arithmetic shift of a value x by y number of bits, `x >> y`.
[rightLogShift(x,&nbsp;y)](functions/rightLogShift.md) | Bitwise right logical shift of value x by y number of bits, `x >>> y`.

## Combinatorics functions

Function | Description
---- | -----------
[bellNumbers(n)](functions/bellNumbers.md) | The Bell Numbers count the number of partitions of a set.
[catalan(n)](functions/catalan.md) | The Catalan Numbers enumerate combinatorial structures of many different types.
[composition(n,&nbsp;k)](functions/composition.md) | The composition counts of n into k parts.
[stirlingS2(n,&nbsp;k)](functions/stirlingS2.md) | The Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets.

## Complex functions

Function | Description
---- | -----------
[arg(x)](functions/arg.md) | Compute the argument of a complex value.
[conj(x)](functions/conj.md) | Compute the complex conjugate of a complex value.
[im(x)](functions/im.md) | Get the imaginary part of a complex number.
[re(x)](functions/re.md) | Get the real part of a complex number.

## Geometry functions

Function | Description
---- | -----------
[distance([x1,&nbsp;y1],&nbsp;[x2,&nbsp;y2])](functions/distance.md) | Calculates:    The eucledian distance between two points in 2 and 3 dimensional spaces.
[intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)](functions/intersect.md) | Calculates the point of intersection of two lines in two or three dimensions and of a line and a plane in three dimensions.

## Logical functions

Function | Description
---- | -----------
[and(x,&nbsp;y)](functions/and.md) | Logical `and`.
[not(x)](functions/not.md) | Logical `not`.
[or(x,&nbsp;y)](functions/or.md) | Logical `or`.
[xor(x,&nbsp;y)](functions/xor.md) | Logical `xor`.

## Matrix functions

Function | Description
---- | -----------
[concat(a,&nbsp;b,&nbsp;c,&nbsp;...&nbsp;[,&nbsp;dim])](functions/concat.md) | Concatenate two or more matrices.
[cross(x,&nbsp;y)](functions/cross.md) | Calculate the cross product for two vectors in three dimensional space.
[det(x)](functions/det.md) | Calculate the determinant of a matrix.
[diag(X)](functions/diag.md) | Create a diagonal matrix or retrieve the diagonal of a matrix  When `x` is a vector, a matrix with vector `x` on the diagonal will be returned.
[dot(x,&nbsp;y)](functions/dot.md) | Calculate the dot product of two vectors.
[eye(n)](functions/eye.md) | Create a 2-dimensional identity matrix with size m x n or n x n.
[filter(x,&nbsp;test)](functions/filter.md) | Filter the items in an array or one dimensional matrix.
[flatten(x)](functions/flatten.md) | Flatten a multi dimensional matrix into a single dimensional matrix.
[forEach(x,&nbsp;callback)](functions/forEach.md) | Iterate over all elements of a matrix/array, and executes the given callback function.
[inv(x)](functions/inv.md) | Calculate the inverse of a square matrix.
[map(x,&nbsp;callback)](functions/map.md) | Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.
[ones(m,&nbsp;n,&nbsp;p,&nbsp;...)](functions/ones.md) | Create a matrix filled with ones.
[partitionSelect(x,&nbsp;k)](functions/partitionSelect.md) | Partition-based selection of an array or 1D matrix.
[range(start,&nbsp;end&nbsp;[,&nbsp;step])](functions/range.md) | Create an array from a range.
[resize(x,&nbsp;size&nbsp;[,&nbsp;defaultValue])](functions/resize.md) | Resize a matrix.
[size(x)](functions/size.md) | Calculate the size of a matrix or scalar.
[sort(x)](functions/sort.md) | Sort the items in a matrix.
[squeeze(x)](functions/squeeze.md) | Squeeze a matrix, remove inner and outer singleton dimensions from a matrix.
[subset(x,&nbsp;index&nbsp;[,&nbsp;replacement])](functions/subset.md) | Get or set a subset of a matrix or string.
[trace(x)](functions/trace.md) | Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.
[transpose(x)](functions/transpose.md) | Transpose a matrix.
[zeros(m,&nbsp;n,&nbsp;p,&nbsp;...)](functions/zeros.md) | Create a matrix filled with zeros.

## Probability functions

Function | Description
---- | -----------
[combinations(n,&nbsp;k)](functions/combinations.md) | Compute the number of ways of picking `k` unordered outcomes from `n` possibilities.
[factorial(n)](functions/factorial.md) | Compute the factorial of a value  Factorial only supports an integer value as argument.
[gamma(n)](functions/gamma.md) | Compute the gamma function of a value using Lanczos approximation for small values, and an extended Stirling approximation for large values.
[kldivergence(x,&nbsp;y)](functions/kldivergence.md) | Calculate the Kullback-Leibler (KL) divergence  between two distributions.
[multinomial(a)](functions/multinomial.md) | Multinomial Coefficients compute the number of ways of picking a1, a2, .
[permutations(n&nbsp;[,&nbsp;k])](functions/permutations.md) | Compute the number of ways of obtaining an ordered subset of `k` elements from a set of `n` elements.
[pickRandom(array)](functions/pickRandom.md) | Random pick a value from a one dimensional array.
[random([min,&nbsp;max])](functions/random.md) | Return a random number larger or equal to `min` and smaller than `max` using a uniform distribution.
[randomInt([min,&nbsp;max])](functions/randomInt.md) | Return a random integer number larger or equal to `min` and smaller than `max` using a uniform distribution.

## Relational functions

Function | Description
---- | -----------
[compare(x,&nbsp;y)](functions/compare.md) | Compare two values.
[deepEqual(x,&nbsp;y)](functions/deepEqual.md) | Test element wise whether two matrices are equal.
[equal(x,&nbsp;y)](functions/equal.md) | Test whether two values are equal.
[larger(x,&nbsp;y)](functions/larger.md) | Test whether value x is larger than y.
[largerEq(x,&nbsp;y)](functions/largerEq.md) | Test whether value x is larger or equal to y.
[smaller(x,&nbsp;y)](functions/smaller.md) | Test whether value x is smaller than y.
[smallerEq(x,&nbsp;y)](functions/smallerEq.md) | Test whether value x is smaller or equal to y.
[unequal(x,&nbsp;y)](functions/unequal.md) | Test whether two values are unequal.

## Statistics functions

Function | Description
---- | -----------
[max(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/max.md) | Compute the maximum value of a matrix or a  list with values.
[mean(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/mean.md) | Compute the mean value of matrix or a list with values.
[median(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/median.md) | Compute the median of a matrix or a list with values.
[min(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/min.md) | Compute the maximum value of a matrix or a  list of values.
[mode(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/mode.md) | Computes the mode of a set of numbers or a list with values(numbers or characters).
[prod(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/prod.md) | Compute the product of a matrix or a list with values.
[quantileSeq(A,&nbsp;prob[,&nbsp;sorted])](functions/quantileSeq.md) | Compute the prob order quantile of a matrix or a list with values.
[std(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/std.md) | Compute the standard deviation of a matrix or a  list with values.
[sum(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/sum.md) | Compute the sum of a matrix or a list with values.
[var(a,&nbsp;b,&nbsp;c,&nbsp;...)](functions/var.md) | Compute the variance of a matrix or a  list with values.

## String functions

Function | Description
---- | -----------
[format(value&nbsp;[,&nbsp;precision])](functions/format.md) | Format a value of any type into a string.
[print(template, values [, precision])](functions/print.md) | Interpolate values into a string template.

## Trigonometry functions

Function | Description
---- | -----------
[acos(x)](functions/acos.md) | Calculate the inverse cosine of a value.
[acosh(x)](functions/acosh.md) | Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.
[acot(x)](functions/acot.md) | Calculate the inverse cotangent of a value, defined as `acot(x) = atan(1/x)`.
[acoth(x)](functions/acoth.md) | Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = atanh(1/x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.
[acsc(x)](functions/acsc.md) | Calculate the inverse cosecant of a value, defined as `acsc(x) = asin(1/x)`.
[acsch(x)](functions/acsch.md) | Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = asinh(1/x) = ln(1/x + sqrt(1/x^2 + 1))`.
[asec(x)](functions/asec.md) | Calculate the inverse secant of a value.
[asech(x)](functions/asech.md) | Calculate the hyperbolic arcsecant of a value, defined as `asech(x) = acosh(1/x) = ln(sqrt(1/x^2 - 1) + 1/x)`.
[asin(x)](functions/asin.md) | Calculate the inverse sine of a value.
[asinh(x)](functions/asinh.md) | Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.
[atan(x)](functions/atan.md) | Calculate the inverse tangent of a value.
[atan2(y,&nbsp;x)](functions/atan2.md) | Calculate the inverse tangent function with two arguments, y/x.
[atanh(x)](functions/atanh.md) | Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.
[cos(x)](functions/cos.md) | Calculate the cosine of a value.
[cosh(x)](functions/cosh.md) | Calculate the hyperbolic cosine of a value, defined as `cosh(x) = 1/2 * (exp(x) + exp(-x))`.
[cot(x)](functions/cot.md) | Calculate the cotangent of a value.
[coth(x)](functions/coth.md) | Calculate the hyperbolic cotangent of a value, defined as `coth(x) = 1 / tanh(x)`.
[csc(x)](functions/csc.md) | Calculate the cosecant of a value, defined as `csc(x) = 1/sin(x)`.
[csch(x)](functions/csch.md) | Calculate the hyperbolic cosecant of a value, defined as `csch(x) = 1 / sinh(x)`.
[sec(x)](functions/sec.md) | Calculate the secant of a value, defined as `sec(x) = 1/cos(x)`.
[sech(x)](functions/sech.md) | Calculate the hyperbolic secant of a value, defined as `sech(x) = 1 / cosh(x)`.
[sin(x)](functions/sin.md) | Calculate the sine of a value.
[sinh(x)](functions/sinh.md) | Calculate the hyperbolic sine of a value, defined as `sinh(x) = 1/2 * (exp(x) - exp(-x))`.
[tan(x)](functions/tan.md) | Calculate the tangent of a value.
[tanh(x)](functions/tanh.md) | Calculate the hyperbolic tangent of a value, defined as `tanh(x) = (exp(2 * x) - 1) / (exp(2 * x) + 1)`.

## Unit functions

Function | Description
---- | -----------
[to(x,&nbsp;unit)](functions/to.md) | Change the unit of a value.

## Utils functions

Function | Description
---- | -----------
[isInteger(x)](functions/isInteger.md) | Test whether a value is an integer number.
[isNaN(x)](functions/isNaN.md) | Test whether a value is NaN (not a number).
[isNegative(x)](functions/isNegative.md) | Test whether a value is negative: smaller than zero.
[isNumeric(x)](functions/isNumeric.md) | Test whether a value is an numeric value.
[isPositive(x)](functions/isPositive.md) | Test whether a value is positive: larger than zero.
[isPrime(x)](functions/isPrime.md) | Test whether a value is prime: has no divisors other than itself and one.
[isZero(x)](functions/isZero.md) | Test whether a value is zero.



<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->
