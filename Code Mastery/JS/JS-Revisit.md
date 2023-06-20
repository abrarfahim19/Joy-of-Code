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