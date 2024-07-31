// task 3:  Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const str = "JavaScript is a Programming Language, and it's also one of the Most Loved Programming Language" 

let re = /\b[A-Z][a-z]*\b/g;
let matched = str.match(re)
// console.log(matched);

// task 4:  Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let strWnums = 'some nums, 5975, 3494, 9739'
let seqDigits = /\d+/g;
let matchSeqDigits = strWnums.match(seqDigits)
// console.log(matchSeqDigits);
// console.log(matchSeqDigits.toLocaleString());
