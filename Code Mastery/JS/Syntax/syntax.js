// This is a single line comment

/*
This is
Multiline
Comment
*/

// This can be done
var carName = "Tesla";
var carName;

// This can not be done
let carName = "Volvo";
let carName;          //Error

// Var does not have block scope
{
    var x = 10;
}
console.log(x)

// Let and const have block scope
{
    let x = 10;
}
console.log(x)        //Error

// Hoisting is true for var
carPrice = 100;
var carPrice;         // Does work
let carPrice;         //Error
// Hoisting is false for let

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
// But you cannot reassign
car = {type:"Tesla", model:"500", color:"white"}; 

