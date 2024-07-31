// task 7:  Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text = "Hello world! This is a test. Hello again!";
const re = /^Hello\b/
let matched = text.match(re);
// console.log(matched);
// console.log(matched.toString());
// console.log(matched[0]);

// task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let reEnd = /\bagain!$/;
let matchedEnd = text.match(reEnd);
// console.log(matchedEnd.toLocaleString());
