// Activity 1: Array Creation and Access
// task 1
console.log('task 1')
const arr = [1,2,3,4,5]
console.log(arr)
// task 2
console.log('task 2')
console.log(arr[0])
console.log(arr[arr.length - 1])

// -----------------------
// Activity 2: Array Methods (Basic)
// Task 3
console.log('task 3')
arr.push(23)
console.log(arr)
// task 4;
console.log('task 4')
arr.pop()
console.log(arr)
// task 5;
console.log('task 5')
arr.shift()
console.log(arr)
// task 6;
console.log('task 6')
arr.unshift(0)
console.log(arr)

// -----------------------
// Activity 3: Array Methods (Intermediate)
// task 7;
console.log('task 7')
const mappedArr = arr.map(num => num * 2)
console.log(mappedArr)
// task 8;
console.log('task 8')
const filteredArray = arr.filter(num => {
    return num % 2 === 0
})
console.log(filteredArray)
// task 9;
console.log('task 9')
const reducedArr = arr.reduce((acc, curr) => acc + curr, 0)
console.log('reducedArray:- ', reducedArr)
console.log('current array:-', arr)

// -----------------------
// Activity 4: Array Iteration.
// task 10
console.log('task 10')
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
// console.log(arr.length)
// task 11
console.log('task 11')
arr.forEach(num => console.log(num * 2))

// -----------------------
// Activity 5: Multi-dimensional Array.
// task 12
console.log('task 12')
let rows = 3;
let cols = 3;
let matrix = Array.from({ length: rows }, (_, i)  =>
  Array.from({ length: cols }, (_, j) => i * cols + j + 1)
);
console.log(matrix);

// task 13
console.log('task 13')
console.log('second element in first row:- ', matrix[0][1]) // second element in first row