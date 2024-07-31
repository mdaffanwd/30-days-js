// task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "RightPassword123";
const re =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validPassword = re.test(password);
validPassword
  ? console.log(`Password is valid`)
  : console.log(`Password is invalid`);

// task 10:  Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://github.com";
let urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}([\/\w .-]*)*(\?[^\s]*)?(#[^\s]*)?$/;

const matched = url.match(urlRegex);
const isValid = matched !== null;

isValid ? console.log("url is valid") : console.log("url is invalid");
