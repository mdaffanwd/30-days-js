// Activity 1: Basic Error Handling with Try-catch
// task 1
{
  console.warn("task 1 starts here");
  function throwError() {
    throw new Error("Error throwed, Intentionally");
  }
  try {
    throwError();
  } catch (error) {
    console.log(error);
  }
  // throwError()
}

// task2
{
  console.warn("task 2 starts here");
  function divide(nr, dr) {
    if (dr === 0) {
      throw new Error("plz, choose another denominator rather than 0");
    }
    return nr / dr;
  }
  function handleError() {
    try {
      let ans = divide(4, 2);
      console.log("Answers is:- ", ans);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  handleError();
}

// Activity 2: Finally Block;
// task 3
{
  console.warn("task 3 starts here");
  try {
    console.log("inside the try block");
    throw new Error("error from the try block");
  } catch (error) {
    console.log("inside catch block");
    console.log("Error:- ", error);
  } finally {
    console.log("it executes every time");
  }
}

// Activity 3: Custom Error Objects;
// task 4
{
  console.warn("task 4 starts here");
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }

  function handleCustomError() {
    throw new CustomError("This is a customError");
  }
  try {
    handleCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("a CustomError:", error.message);
    } else {
      console.log("an unexpected error:", error);
    }
  }
}

// task 5
{
  console.warn("task 5 starts here");

  class ErrorValidation extends Error {
    constructor(message) {
      super(message);
      this.name = "ErrorValidation";
    }
  }
  function validateInput(input) {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
    }
    return true;
  }
  try {
    const userInput = "";
    validateInput(userInput);
    console.log("Input is valid");
  } catch (error) {
    if (error instanceof ErrorValidation) {
      console.log("Validation Error:", error.message);
    } else {
      console.log("An unexpected error occurred:", error);
    }
  }
}

// Activity 4: Error Handling in Promises;
// task 6
{
  console.warn("task 6 starts here");

  const randomPromise = new Promise((res, rej) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      res("Promise resolved successfully!");
    } else {
      rej("Promise rejected!");
    }
  });

  randomPromise
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// task 7
{
  console.warn("task 7 starts here");
  function randomNum() {
    return new Promise((res, rej) => {
      let rndmNo = Math.random();
      if (rndmNo > 0.5) {
        res("Promise Resolved");
      } else {
        rej("Promise Rejected");
      }
    });
  }

  async function handlePromise() {
    try {
      const res = await randomNum();
      console.log("resolved:", res);
    } catch (error) {
      console.log("rejected:", error);
    }
  }
  handlePromise();
}

// Activity 5: Error Handling in Promises;
// task 8
{
  console.warn("task 8 starts here");
  async function fetchData() {
    const res = await fetch("https://abcdefgkfja");
    return res.json();
  }
  fetchData()
    .then((res) => {
      console.log(res);
    })
    .catch((err = console.log(err)));
}

// task 9
{
  console.warn("task 9 starts here");
  async function fetchWrongURL() {
    try {
      const res = await fetch("https://api.github.com/users/mdaffanwd");

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  }

  fetchWrongURL();
}
