// task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let pNum = "(123) 456-7890";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = pNum.match(regex);
// console.log(matches);
// if (matches) {
//   console.log("Full match:", matches[0]);
//   console.log("Area code:", matches[1]);
//   console.log("Central office code:", matches[2]);
//   console.log("Line number:", matches[3]);
// } else {
//   console.log("No matches found.");
// }

// task 6:  Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = 'username@domain.com'
let emailReg = /([^@]+)@([^@]+)$/
let matchings = email.match(emailReg)
// console.log('Full email:-', matchings[0]);
// console.log('username:-', matchings[1]);
// console.log('domain:-', matchings[2]);
