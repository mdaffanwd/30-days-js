// Constants
export const PI = 3.14159;
export const E = 2.71828;

// Functions
export function add(a, b, msg = `addition of ${a} and ${b} is:- `) {
  console.log(msg, a + b);
}

export function subtract(a, b, msg = `subtraction of ${a} and ${b} is:- `) {
  console.log(msg, a - b);
}

export function multiply(a, b, msg = `multiplication of ${a} and ${b} is:- `) {
  console.log(msg, a * b);
}

export function divide(a, b, msg = `division of ${a} and ${b} is:- `) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(msg, a / b);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export function square(x, msg = `square of ${x} is:-`) {
  console.log(msg, x * x);
}

export function cube(x, msg = `cube root of ${x} is:- `) {
  console.log(msg, x * x * x);
}
