// --> Activity 1: For Loop
// Task 1
for (let i = 0; i <= 10; i++) {
  // console.log(i)
}
// Task 2
let j = 5;
for (let i = 1; i <= 10; i++) {
  // console.log(`${j} x ${i} = ${j*i}`)
}

// --> Activity 2: While Loop
// Task 2
let i = 1;
while (i <= 10) {
  // console.log(i)
  i++;
}
// Task 4
let x = 10;
while (x >= 1) {
  // console.log(x)
  x--;
}

// --> Activity 3: Do.. While Loop
// Task 5
let dw = 1;
do {
  // console.log(dw)
  dw++;
} while (dw <= 5);
// Task 6
{
  let factorial = 1;
  let num = 5;
  do {
    factorial *= num;
    num--;
    // console.log(factorial)
  } while (num > 0);
}
// --> Activity 4: Nested Loop
// Task 7;
for (let line = 1; line <= 5; line++) {
  let stars = "";
  for (let star = 1; star <= line; star++) {
    stars += "*";
  }
  // console.log(stars)
}
// --> Activity 5: Loop control statements
// Task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log('skipped 5')
    continue;
  }
  // console.log(i)
}
// Task 9
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    // console.log('skipped 5')
    break;
  }
  console.log(i);
}
