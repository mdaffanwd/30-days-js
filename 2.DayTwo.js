// --> Activity 1 : Arithmetic Operators <-

function evaluate(operation) {
  const operations = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    remainder: (a, b) => a % b,
    // --> Activity 2: Assignment Operators <-
    "+=": (a, b) => (a += b),
    "-=": (a, b) => (a -= b),
    // --> Activity 3: Comparison Operators <-
    '<': (a, b) => (a < b),
    '>': (a, b) => (a > b),
    // --> Activity 4: Logical Operators <-
    '&&' : (a, b) => (a && b),
    '||' : (a, b) => (a || b),
    
};
  return (a, b) =>
// ---> Activity 5: Ternary Operator<---
    operations[operation]
      ? operations[operation](a, b)
      : `please check the operation`;
}

console.log(evaluate('sum')(1, 2))
console.log(evaluate('subtract')(2, 1))
console.log(evaluate('multiply')(1, 2))
console.log(evaluate('divide')(1, 2))
console.log(evaluate('remainder')(2, 2))
// ---> Activity 2 Logs <---
console.log(evaluate("+=")(2, 3));
console.log(evaluate("-=")(8, 3));
// ---> Activity 3 Logs <---
console.log(evaluate("<")(2, 3));
console.log(evaluate(">")(4, 3));
// ---> Activity 4 Logs <---
console.log(evaluate("&&")(3, 4));
console.log(evaluate("||")(3, false));



