// task 1
let word =
  "JavaScript is a single threaded language, and JavaScript works the priciple of JIT compilation";
  const re = new RegExp("JavaScript", 'g');
const re1 = /JavaScript/g;
// console.log(word.match(re));
// console.log(word.match(re1));

// task 2
let strWnums = 'hey, bro how are you? is your mo. no. this?? 123993943 and save mine 1384737439'
let numReg = /\d/g;
let matches = strWnums.match(numReg)
// console.log(matches);
// console.log(matches.toLocaleString());
