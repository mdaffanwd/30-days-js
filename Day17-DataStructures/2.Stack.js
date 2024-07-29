// Activity 2: Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  length() {
    return this.items.length;
  }
  pop() {
    if (this.items.length === 0) {
      console.log("stack is empty");
      return null;
    }
    return this.items.pop();
  }
  peek() {
    if (this.items.length === 0) {
      console.log("stack is empty");
      return null;
    }
    return this.items[this.length() - 1];
  }
}

const stack = new Stack();
// stack.push(20)
// stack.push(210)
// stack.push(220)
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.peek());

// task 4
function reverseString(str) {
  let stack = new Stack();

  for (let alphabet of str) {
    stack.push(alphabet);
  }

  let reversedString = "";
  while (stack.items.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// let string = "Coder";
let reversed = reverseString('Coder')
console.log(reversed);
console.log(reverseString('ChaiAurCode'));