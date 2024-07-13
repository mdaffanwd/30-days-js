// ---> Activity 1: Variable Declaration <---
// Task 1
var num = 1;
// console.log(num)

// Task 2.
let name = "Mohammad Affan"
console.log(name)


// ---> Activity 2: Constant Declaration <---
const aWebDeveloper = true;
console.log(aWebDeveloper)


// ---> Activity 3: Data Types <---
const number = 23;
console.log(typeof number)

const string = 'Hey, How are you?'
// console.log(typeof string)

const boolean = true;
console.log(typeof boolean)

const object = {}
console.log(typeof object)

const array = [number, string, boolean, object]
console.log(typeof array)


// ---> Activity 4: Reassigning Variables <---
let initialValue = 'inital value'
console.log(initialValue) //inital value 
initialValue = 'New Value'
console.log(initialValue) // New Value

// ---> Activity 5: Understanding Const <---
const val = 'initial Value'
//val = 'new value' // TypeError: Assignment to constant variable.


// --------> Feature Request. <--------
const number2 = 23;
console.log(number2, typeof number2)

const string2 = 'Hey, How are you?'
console.log(string2, typeof string2)

const boolean2 = true;
console.log(boolean2, typeof boolean2)

const object2 = {}
console.log(object2, typeof object2)

const array2 = [number, string, boolean, object]
console.log(array2, typeof array2)

// Reassignment Demo
// Using let
let myLetVariable = 'Initial Value';
console.log('Initial value of myLetVariable:', myLetVariable);

myLetVariable = 'New Value';
console.log('Reassigned value of myLetVariable:', myLetVariable);

// Using const
const myConstVariable = 'Initial Value';
console.log('Initial value of myConstVariable:', myConstVariable);

try {
  myConstVariable = 'New Value'; // This will throw an error
} catch (error) {
  console.log('Error when trying to reassign myConstVariable:', error.message);
}
