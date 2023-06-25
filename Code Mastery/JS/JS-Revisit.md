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