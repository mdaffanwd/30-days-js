// -------------------------------
// Bismillahir Rahmanir Raheem
// -------------------------------
// --> Activity 1: Function Declaration
// Task 1
// let num = Number(prompt(`Enter the num to check it's even or odd`));
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    //   console.log(`You entered: ${num} and it's Even`);
  } else {
    //   console.log(`You entered: ${num} and it's Odd`);
  }
}
// checkEvenOdd(num);

// Task 2
// let sqNum = Number(prompt(`Enter the num to know it's square`));
function squareNum(sqNum) {
  // console.log(sqNum ** 2)
}
// squareNum(sqNum)

// --> Activity 2: Function Expression
// Task 3
function maxNum(a, b) {
  a > b ? console.log(a) : console.log(b);
}
// maxNum(5, 8);
// Task 4
function concat(...strings) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += `${strings[i]} `;
  }
  console.log(result);
}
// concat("Hello", "World", "han");

// --> Activity 3: Arrow Functions
const add = (a, b) => {
  console.log(a + b);
};
// add(5,4)
// Task 6
const containsCharacter = (str, char) => {
  console.log(str.includes(char));
};
// containsCharacter('hello', 'o')

// --> Activity 4: Function Parameters and Default Values
// Task 7
function product(a, b = 6) {
  console.log(a * b);
}
// product(5)
// Task 8
function greet(name, age = 18) {
  console.log(`Assalamu Alaikum, ${name}, How are you.\nYour age is ${age}`);
}
// greet('Affan')

// --> Activity 5: Higher Order Functions
// Task 9
const repeatFunction = (fnc, num) => {
  for (let i = 0; i < num; i++) {
    fnc();
  }
};
function repeatGreet() {
  console.log("Assalamu Alaikum");
}
// repeatFunction(repeatGreet, 3)

// Task 10
const applyFunctions = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};

const addTwo = (num) => num + 2;
const multiplyByThree = (num) => num * 3;

const finalResult = applyFunctions(addTwo, multiplyByThree, 5);
console.log(finalResult);
