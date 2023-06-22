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