// --> Activity 1: Template Literals
// task 1
const name = 'Mohammad Affan'
const age = 5
// console.log(`name is ${name} and age is ${age}`)

// task 2
const multiline =
`This is line 1
this is line 2`
// console.log(multiline)

// --> Activity 2: Destructuring
// task 3
const numArr = [1,2,3,4,5]
const [firstElem, secondElem] = numArr;

// console.log(`First element: ${firstElem}`);
// console.log(`Second element: ${secondElem}`);


// task 4
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Novel'
};
const { title, author } = book;

// console.log(`Title: ${title}`);
// console.log(`Author: ${author}`);

// --> Activity 3: Spread and Rest Operators.
// task 5
const newArr = [...numArr, 5,6,7,8]
// console.log(newArr)

// task 6
function sum(...nums) {
    console.log(nums.reduce((acc, curr) => acc + curr, 0))    
}
// sum(1,2,35387523,5833.3432432)
// sum(...newArr)
// sum(...numArr)

// --> Activity 4: Default Parameters.
function multiply(a, b = 1) {
    console.log(a * b)
}
// multiply(19)

// --> Activity 5: Enhanced Object Literals.
// task 8 
const username = 'mdaffanwd'
const userAge = 5;

// enhanced Object
const student = {
    username,
    userAge
}
// console.log(student.username)
// console.log(student.userAge)

// task 9
const compUsername = 'username'
const compUserAge = 'age'
const user = {
    [compUsername] : 'affan' ,
    [compUserAge] : 20
}
console.log(user)
console.log(user[username]) // undefined. bcz username is not a variable. yeh ek string literal hona chahiye. Isliye, user[username] undefined return karta hai kyunki username naam ki koi property nahi hai.
console.log(user[compUsername])