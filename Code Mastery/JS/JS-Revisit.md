# JS Mastery

### Things to lookout for before starting.

- Unicode vs UTF-8 Encoding
- Comment and Multiline Comment
- Redeclaring with **let** vs **var**
- Hoisting with **let** vs **var**
- const misleading (What does it mean to be const)
- postfix increment vs prefix increment

# JavaScript has 8 Datatypes

1. String

2. Number

3. Bigint

4. Boolean

5. Undefined

6. Null

7. Symbol

8. Object

**The object data type can contain:**

1. An object
2. An array
3. A date

Difference between

```jsx
let x = 16 + 4 + "Volvo";
let x = 16 + "Volvo" + 4;
let x = "Volvo" + 16 + 4;
```

**JavaScript Types are Dynamic**

```jsx
let x = "Abrar";
let x = 123;
```

<aside>
💡 **Note**

Most programming languages have many number types:

Whole numbers (integers):

byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):

float (32-bit), double (64-bit).

**Javascript numbers are always one type:double (64-bit floating point).**

</aside>

BigInt can store bigger number than that.

## Function

```jsx
function arguments(parameter1, parameter2, parameter3){
	console.log(argumnents);
	return parmeter1;
}
```

## Object

```jsx
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Both are valid methods
person.firstName;
person["lastName"];
```

Do not declare String, Number and Boolean as object. Why?

<aside>
💡 **Primitives are generally more performant than their object counterparts**

</aside>

```jsx
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean obje
```

## Event

The common paradigm goes as follows

```jsx
<element event='some JavaScript'>
```

## Strings

use of backslash operator is common in many programming language

```jsx
let text = "We are the so-called \"Vikings\" from the north.";
```

Don’t create string object because:

```jsx
let x = "John";
let y = new String("John");
x == y // true
x === y // false
```

For object

```jsx
let x = new String("John");
let y = new String("John");
x == y // false
x === y // false
```

<aside>
💡 **In JavaScript, when comparing two objects using the equality operators (`==` or `===`), the comparison is based on reference equality rather than the equality of their contents.**

</aside>

String methods

- String **length**
- String **slice()**
- String **substring()**
- String **substr()**
- String **replace()**
- String **replaceAll()**
- String **toUpperCase()**
- String **toLowerCase()**
- String **concat()**
- String **trim()**
- String **trimStart()**
- String **trimEnd()**
- String **padStart()**
- String **padEnd()**
- String **charAt()**
- String **charCodeAt()**
- String **split()**

Some Interesting methods to look out for:

```jsx
let text = "Please visit Microsoft site by Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
// i for insensetive
let newText = text.replace(/MICROSOFT/g, "W3Schools");
// g for global (all matches)
```

Or you can combine them both as well:

```jsx
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/gi, "W3Schools");
```

## String Search Methods

- String indexOf()
- String lastIndexOf()
- String search()
- String match()
- String matchAll()
- String includes()
- String startsWith()
- String endsWith()

<aside>
💡 The two methods, `indexOf()` and `search()`, are **not** **equal.** 
Because `indexOf()` can take two arguments. ****

</aside>

In search `regex` can be used.

```jsx
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; // 3030 not 102030
```

## Number

`NaN` is a typeof “number”. When number is divided by string it throws `NaN`.

```jsx
let x = 100 / "Apple";
isNaN(x);
```

`infinity` is a typeof “number”. When number is outside possible number it shows `infinity`.

```jsx
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
```

Convert number to different base.

```jsx
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
```

## BigInt

The JavaScript `typeof` a `BigInt` is "bigint". JavaScript integers are only accurate up to 15 digits:

To call bigInt add n at the end of a number;

```jsx
let x = 9999999999999999;
let y = 9999999999999999n;
```

or call `bigInt()`

```jsx
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
```

With `BigInt` the total number of supported data types in JavaScript is 8:

1. String

2. Number

3. Bigint

4. Boolean

5. Undefined

6. Null

7. Symbol

8. Object

```jsx
let x = Number.MAX_SAFE_INTEGER;
let x = Number.MIN_SAFE_INTEGER;
Number.isInteger(10.5);
Number.isSafeInteger(12345678901234567890);
```

## Number Methods

| Method | Description |
| --- | --- |
| toString() | Returns a number as a string |
| toExponential() | Returns a number written in exponential notation |
| toFixed() | Returns a number written with a number of decimals |
| toPrecision() | Returns a number written with a specified length |
| ValueOf() | Returns a number as a number |

```jsx
let x = new Number(10);
x.valueOf();
```

| Method | Description |
| --- | --- |
| Number() | Returns a number converted from its argument. |
| parseFloat() | Parses its argument and returns a floating point number |
| parseInt() | Parses its argument and returns a whole number |

## **Number Properties**

| Property | Description |
| --- | --- |
| EPSILON | The difference between 1 and the smallest number > 1. |
| MAX_VALUE | The largest number possible in JavaScript |
| MIN_VALUE | The smallest number possible in JavaScript |
| MAX_SAFE_INTEGER | The maximum safe integer (253 - 1) |
| MIN_SAFE_INTEGER | The minimum safe integer -(253 - 1) |
| POSITIVE_INFINITY | Infinity (returned on overflow) |
| NEGATIVE_INFINITY | Negative infinity (returned on overflow) |
| NaN | A "Not-a-Number" value |

## Array

<aside>
💡 Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.

</aside>

**Getting value of Array**

```jsx
const person = ["John", "Doe", 46];
person[1]; // Doe
```

**Getting value of Object**

```jsx
const person = {firstName:"John", lastName:"Doe", age:46};
person.lastName; // Doe
```

**Array Elements Can Be Objects**

```jsx
myArray[0] = Date.now;   // Date Object
myArray[1] = myFunction; // Function
myArray[2] = myCars;     // object
```

<aside>
💡 JavaScript does **not** support arrays with named indexes. In JavaScript, **arrays** always use **numbered indexes**.

</aside>

Follow the code bellow it will generate error:

```jsx
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```

**Difference between array and object**

| Array | Object |
| --- | --- |
| Array use numbered index | Object use named index |
| use arrays when you want the element names to be numbers. | use objects when you want the element names to be strings (text). |

**new Array Object creation in JavaScript**

```jsx
const points = new Array(40); // Array with 40 empty value.
const points = [40];          // Array with a value 40
```

`array` and `object` they both returns typeof ‘`object`’ so in order to identify an array we can do is this:

```jsx
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits);    // true
fruits instanceof Array;  // true
```

### Array Methods

| Method | Details |
| --- | --- |
| Array length | returns the length of the array. |
| Array toString() | returns the string representation. |
| Array pop() | removes and returns the last element of the array. |
| Array push() | adds the `value` as the last element of the array and returns the new length of array. |
| Array shift() | removes and returns the first element of the array. |
| Array unshift() | adds the `value` as the first element of the array and returns the new length of array. |
| Array join()
 | returns an array as a string and a separator can be specified ex. array.join(separator). |
| Array delete() | delete leaves undefined holes in the array. |
| Array concat() | creates a new array by merging (concatenating) existing arrays and returns the new Array. |
| Array flat() | reduce the dimensionality of an array. |
| Array splice() | add new items to an array or remove items from the array ex. fruits.splice(p, q, "y", "x"); |
| Array slice() | creates a new array doesn’t remove any element from the array. |

### Sort Array

The `sort()` method sorts an array alphabetically so 100 is smaller than 2 that’s where compare function comes in.

```jsx
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // sort in ascending order
points.sort(function(a, b){return b - a}); // sort in descending order
```

### Sorting in Random Order (might favor some number over other)

```jsx
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
```

### **The Fisher Yates Method**

```jsx
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
```

### Find Max and Min

```jsx
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
```

<aside>
💡 The fastest solution is to use a "home made" method. [ *i.e. looping and reassigning the min/max value* ]
</aside>

### Home Made Solution for Max:

```jsx
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
```

### Sorting Object

The trick is to use a compare function for values:

```jsx
arr.sort(function(a,b){return a.value - b.value})
```

Comparing the string can be a little bit tricky:

```jsx
arr.sort(
    function(a,b){
        return a.keyName.toLowerCase() - b.keyName.toLowerCase()
    }
)
```

Welp! not that tricky actually.

### **Stable Array sort()**

Before ES2019, the **`sort()`** method in JavaScript did not guarantee a stable sorting algorithm. This means that when sorting elements based on a specific value, elements with the same value were not guaranteed to maintain their original relative positions in the sorted array.

*Example*

```jsx
const myArr = [
  {name: "X00", price: 100},
  {name: "X01", price: 100},
  {name: "X02", price: 100},
  {name: "X03", price: 100},
  {name: "X04", price: 110},
  {name: "X05", price: 110},
  {name: "X06", price: 110},
  {name: "X07", price: 110}
];
```

## Array Iteration:

### forEach()

forEach takes a callback function and executes for each element of the array

```jsx
const num = [1,2,3,4,5];
let txt = "";

num.forEach(myfunc); // Takes callback func myFunc

function myFunc(value,index,array){
    txt += value + "<br>";
};
```

<aside>
💡 The callback function takes three arguments:
**1. value,
2. index,
3. Array**

</aside>

### map()

The `map()` method creates a new array by performing a function on each array element.

The `map()` method does not execute the function for array elements without values.

The `map()` method does not change the original array

```jsx
const num = [1,2,3,4,5];
const newNum = num.map(doubleIt);
const doubleIt = (value,index,arr) => {
    return value*2;
}
```

### flatMap

The **`flatMap()`** method also transforms each element of an array based on a provided callback function, but it flattens the resulting array

```jsx
const num = [1,2];

const newNum = num.map(doubleIt);       // [[1,2],[1,2]]
const newNum = num.flatMap(doubleIt);   // [1,2,1,2]

const doubleIt = (value,index,arr) => {
    return arr;
}
```

### filter()

The `filter()` method creates a *new array* with array elements that pass a test.

```jsx
const num = [1,2,3,4];

const newNum = num.filter(oddNum);

function oddNum(value, index, array){
	if (value%2 == 1){
		return true;
	}
}
```

### reducer()

The `reduce()` method runs a function on each array element to produce (reduce it to) a single value.

```jsx
const num = [1,2,3,4,5];

const total = num.reduce(getTotal);

function getTotal(total, value, index, array){
	return total + value;
}
```

The *reduce* function can also take up a initial value:

```jsx
const total = num.reduce(getTotal, 100);
```

### reduceRight()

This function `reduceRight()` works right to left. Also can take up an initial value:

### every()

The function `every()` takes up a function and checks the function against each value and returns true if all of the value satisfies the functions value.

```jsx
const num = [10,20,30,40,50];

let isTrue = num.every(greaterThanTwenty);

function greaterThanTwenty(value, index, array){
	return value > 20;
}
```

### some()

The function `some()` takes up a function and checks the function against each value and returns true if some of the value satisfies the functions value.

```jsx
const num = [10,20,30,40,50];

let isTrue = num.some(greaterThanTwenty);

function greaterThanTwenty(value, index, array){
	return value > 20;
}
```

### indexOf()

The `indexOf()` method searches an array for an element value and returns its position.

```jsx
const fruits = ["Apple","Banana","Grape","Strawberry","Grape"];

const position = fruits.indexOf("Grape"); //2
```

syntax:

*indexOf( item, start )*

### lastIndexOf()

The `lastIndexOf()` method searches an array for an element value and returns its position. *from last*

```jsx
const fruits = ["Apple","Banana","Grape","Strawberry","Grape"];

const position = fruits.indexOf("Grape"); //4
```

syntax:

*lastIndexOf( item, start )*

### find()

The `find()` method returns the value of the first array element that passes a test function.

```jsx
const number = [1,23,15,37,8,16,12];

const firstEvenNumber = number.find(evenNumber);

function evenNumber(value,index,array) {
	return value%2 === 1;
}
```

### findIndex()

The `findIndex()` method returns the index of the first array element that passes a test function.

```jsx
const number = [1,23,15,37,8,16,12];

const postitonOfFirstEvenNumber = number.findIndex(evenNumber);

function evenNumber(value,index,array) {
	return value%2 === 1;
}
```

### Array.from(******ObjectWithLength******)

The `Array.from()` method returns An array from an object that has length.

```jsx
const name = "ABRAR";

Array.from(name);      // ["A","B","R","A","R"]
```

### Array.keys()

The `Array.keys()` method returns an *iterator* from an object with the keys of an object.

```jsx
const name = ["Abrar", "Fahim", "Patwari"];

const myKeys = name.keys();

for (let key of myKeys){
	console.log(key);      //0 1 2
}
```

### Array.entries()

The `Array.entries()` method returns an *iterator* from an object with the key/value pair of an object.

```jsx
const name = ["Abrar", "Fahim", "Patwari"];

const myKeys = name.entries();

for (let key of myKeys){
	console.log(key);     // [0,"Abrar"] [1,"Fahim"] [2,"Patwari"]
}
```

### Array.includes()

The `Array.includes()` method returns true if the element is present in the array.

```jsx
const data = [NaN, 1, 2, 3 , "Grape"];

const doesExist = data.indexOf(NaN);     // -1
const doesExist = data.includes(NaN);    // true
```

<aside>
💡 It allows check for NaN values

</aside>

### Array Spread …

The `Array Spread ...` spreads an array elements

```jsx
const first = [1,2,3,4,5];
const second = [6,7,8,9,10];
const third = [11,12,13,14,15];

const numbers = [...first, ...second, ...third];

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

### Arrays are not constants

The   `Array`   are not constant. When we declare it with *const* we declare that the array reference is a const. That cannot be changed. *i.e.* we can update the array with push, pop or reassigning the value

```jsx
let x = [1,2,3];
x.push(value);

```

### Array has block scope

```jsx
const fruits = ["Apple", "Banana"];
{
	const fruits = ["Grape", "Strawberry"];
}
```

## Date

### parse date

The `Date.parse()` converts a valid time string to milliseconds.

```jsx
let msec = Date.parse("March 21, 2012");
```

### convert millisecond to valid date

The `new Date()` will convert this milliseconds back to the date string.

```jsx
const d = new Date(msec);
```

### Date Get Methods

| Method | Description |
| --- | --- |
| getFullYear() | Get year as a four digit number (yyyy) |
| getMonth() | Get month as a number (0-11) |
| getDate() | Get day as a number (1-31) |
| getDay() | Get weekday as a number (0-6) |
| getHours() | Get hour (0-23) |
| getMinutes() | Get minute (0-59) |
| getSeconds() | Get second (0-59) |
| getMilliseconds() | Get millisecond (0-999) |
| getTime() | Get time (milliseconds since January 1, 1970) |

### Date Set Methods

| Method | Description |
| --- | --- |
| setDate() | Set the day as a number (1-31) |
| setFullYear() | Set the year (optionally month and day) |
| setHours() | Set the hour (0-23) |
| setMilliseconds() | Set the milliseconds (0-999) |
| setMinutes() | Set the minutes (0-59) |
| setMonth() | Set the month (0-11) |
| setSeconds() | Set the seconds (0-59) |
| setTime() | Set the time (milliseconds since January 1, 1970) |

### JS Math Methods

| Method | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_abs.asp | Returns the absolute value of x |
| https://www.w3schools.com/jsref/jsref_acos.asp | Returns the arccosine of x, in radians |
| https://www.w3schools.com/jsref/jsref_acosh.asp | Returns the hyperbolic arccosine of x |
| https://www.w3schools.com/jsref/jsref_asin.asp | Returns the arcsine of x, in radians |
| https://www.w3schools.com/jsref/jsref_asinh.asp | Returns the hyperbolic arcsine of x |
| https://www.w3schools.com/jsref/jsref_atan.asp | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| https://www.w3schools.com/jsref/jsref_atan2.asp | Returns the arctangent of the quotient of its arguments |
| https://www.w3schools.com/jsref/jsref_atanh.asp | Returns the hyperbolic arctangent of x |
| https://www.w3schools.com/jsref/jsref_cbrt.asp | Returns the cubic root of x |
| https://www.w3schools.com/jsref/jsref_ceil.asp | Returns x, rounded upwards to the nearest integer |
| https://www.w3schools.com/jsref/jsref_cos.asp | Returns the cosine of x (x is in radians) |
| https://www.w3schools.com/jsref/jsref_cosh.asp | Returns the hyperbolic cosine of x |
| https://www.w3schools.com/jsref/jsref_exp.asp | Returns the value of Ex |
| https://www.w3schools.com/jsref/jsref_floor.asp | Returns x, rounded downwards to the nearest integer |
| https://www.w3schools.com/jsref/jsref_log.asp | Returns the natural logarithm (base E) of x |
| https://www.w3schools.com/jsref/jsref_max.asp | Returns the number with the highest value |
| https://www.w3schools.com/jsref/jsref_min.asp | Returns the number with the lowest value |
| https://www.w3schools.com/jsref/jsref_pow.asp | Returns the value of x to the power of y |
| https://www.w3schools.com/jsref/jsref_random.asp | Returns a random number between 0 and 1 |
| https://www.w3schools.com/jsref/jsref_round.asp | Rounds x to the nearest integer |
| https://www.w3schools.com/jsref/jsref_sign.asp | Returns if x is negative, null or positive (-1, 0, 1) |
| https://www.w3schools.com/jsref/jsref_sin.asp | Returns the sine of x (x is in radians) |
| https://www.w3schools.com/jsref/jsref_sinh.asp | Returns the hyperbolic sine of x |
| https://www.w3schools.com/jsref/jsref_sqrt.asp | Returns the square root of x |
| https://www.w3schools.com/jsref/jsref_tan.asp | Returns the tangent of an angle |
| https://www.w3schools.com/jsref/jsref_tanh.asp | Returns the hyperbolic tangent of a number |
| https://www.w3schools.com/jsref/jsref_trunc.asp | Returns the integer part of a number (x) |


