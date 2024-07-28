// =============================
// Activity 1: Understanding Closures
// =============================

// task 1
function outerFnc() {
  let task = `1st coding task of the day`;
  function innerFnc() {
    console.log(task);
  }
  return innerFnc;
}
// outerFnc()()

// task 2
function Counter() {
  let counter = 0;
  return function increment() {
    return counter++;
  };
}
const count = Counter();
// console.log(count());
// console.log(count());

const count2 = Counter();
// console.log(count2());

// =============================
// Activity 2: Practical Closures
// =============================
// task 3;
function uniqueIdGen() {
  let lastId = 0;
  return function generateId() {
    lastId += 1;
    return lastId;
  };
}
const idGenerator = uniqueIdGen();
// console.log(idGenerator());
// console.log(idGenerator());
// console.log(idGenerator());

// task 4
function captUser(name) {
  let username = name;
  return function greetUser() {
    console.log(`Assalamu Alaikum, ${username}\nkaise ho?!!!`);
  };
}
// captUser('affan')();

// =============================
// Activity 3: Closures in Loops
// =============================
// task 5
let fncsArr = [];
for (let i = 0; i <= 5; i++) {
  fncsArr[i] = (function (index) {
    return function () {
      console.log("the function index is", index);
    };
  })(i);
}
// console.log(fncsArr);
// fncArr.map((fnc) => fnc());
// fncsArr[2]()
// fncsArr[4]()

// =============================
// Activity 4: Module Pattern
// =============================
// task 6
const moduleToManage = function () {
  let collection = [];
  return {
    addToCollection: function (item) {
      collection.push(item);
      console.log(
        `the added item is ${item} and total items are ${collection}`
      );
    },
    removeFromCollection: function (item) {
      const index = collection.indexOf(item);
      if (index !== -1) {
        collection.splice(index, 1);
        console.log(`Item removed: ${item}`);
      } else {
        console.log(`Item not found: ${item}`);
      }
      console.log(collection);
      // collection.unshift(item)
    },
    listItems: function () {
      console.log("Current items:", collection);
    },
  };
};
const itemManager = moduleToManage();
// itemManager.addToCollection("chai");
// itemManager.addToCollection("biscuit");
// itemManager.addToCollection("chapatti");
// itemManager.removeFromCollection("chapatti");
// itemManager.listItems()

// =============================
// Activity 5: Memoization
// =============================
// task 7
// from chatGPT
function memoize(fn) {
  // Yeh object cache ke liye hai jahan results store karenge
  const cache = {};

  return function (...args) {
    // Arguments ko string mein convert karke ek unique key banate hain
    const key = JSON.stringify(args);

    // Agar result pehle se cache mein hai toh wahi return karenge
    if (cache[key]) {
      console.log("Cache se result:", key);
      return cache[key];
    }

    // Agar result cache mein nahi hai, toh function call karke result calculate karte hain
    console.log("Naya result calculate:", key);
    const result = fn(...args);
    // Result ko cache mein store karte hain
    cache[key] = result;
    return result;
  };
}

// Example usage
// Ek simple addition function banate hain
function add(a, b) {
  return a + b;
}

// Addition function ko memoize karte hain
const memoizedAdd = memoize(add);

// console.log(memoizedAdd(1, 2)); // Pehli baar result calculate karega -> 3
// console.log(memoizedAdd(1, 2)); // Cache se result lega -> 3
// console.log(memoizedAdd(2, 3)); // Pehli baar result calculate karega -> 5
// console.log(memoizedAdd(1, 2)); // Cache se result lega -> 3

// task 8
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive calculation
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // First time, calculates 5! = 120
console.log(memoizedFactorial(5)); // Cached result for 5! = 120
console.log(memoizedFactorial(6)); // Calculates 6! = 720, uses cached 5! = 120
console.log(memoizedFactorial(7)); // Calculates 7! = 5040, uses cached 6! = 720
