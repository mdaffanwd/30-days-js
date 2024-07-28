// =============================
// Activity 1: Basic Recursion.
// =============================

// task 1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));

// task 2:-
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(10));
// console.log(fibonacci(9));
// console.log(fibonacci(8));
// console.log(fibonacci(7));

// =============================
// Activity 2: Recursion with Arrays.
// =============================
// task 3
let arr = [1, 2, 3, 4, 5, 6];
function recurseArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + recurseArray(arr);
}
// console.log(recurseArray(arr));
// console.log(recurseArray([1, 2, 3, 4, 5]));

// task 4
function maxInArr(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let maxVal = maxInArr(arr.slice(1));
  return arr[0] > maxVal ? arr[0] : maxVal;
}
// console.log(maxInArr(arr));
// console.log(maxInArr([23, 975, 1937, 37, 39847, 783]));
// console.log(maxInArr([23, 975, 1, 'a', 'abc']));

// =============================
// Activity 3: String Manipulation with Recursion.
// =============================
// task 5
function reverseStr(str) {
  if (str === "") {
    return "";
  }
  return reverseStr(str.slice(1)) + str[0];
}
// console.log(reverseStr('string'));
// console.log(reverseStr('chai'));

// task 6
function palindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return palindrome(str.substring(1, str.length - 1));
}
// console.log(palindrome('mam'));
// console.log(palindrome('man'));

// =============================
// Activity 4: Recursive Search.
// =============================
// task 7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: If the left index exceeds the right, the target is not found
  if (left > right) {
    return -1; // Target not found
  }

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid; // Target found
  }

  // Recursive case: Search the left or right half
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1); // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, right); // Search right half
  }
}

// Test cases
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 5));
// console.log(binarySearch([1, 2, 3, 4, 5], 1));
// console.log(binarySearch([1, 2, 3, 4, 5], 6));
// console.log(binarySearch([10, 20, 30, 40, 50], 30));

// task 8
function occurences(arr, target, i = 0) {
  if (i === arr.length) {
    return 0;
  }
  let count = arr[i] === target ? 1 : 0;
  return count + occurences(arr, target, i + 1);
}
// console.log(occurences([1, 5, 5, 5, 3], 5));

// =============================
// Activity 5: Tree Traversal.
// =============================
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Recursively traverse the left subtree
  inOrderTraversal(node.left);

  // Log the current node's value
  console.log(node.value);

  // Recursively traverse the right subtree
  inOrderTraversal(node.right);
}

// Test the function with a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// console.log("In-order Traversal:");
// inOrderTraversal(root); // Output: 4 2 5 1 6 3 7

// task 10
{
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function calculateDepth(node) {
    // Base case: If the node is null, return 0
    if (node === null) {
      return 0;
    }

    // Recursive case: Calculate the depth of left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // The depth of the current node is the maximum of leftDepth and rightDepth plus 1
    return Math.max(leftDepth, rightDepth) + 1;
  }

  // Test the function with a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

//   console.log("Depth of the tree:", calculateDepth(root)); // Output: 3

  // Another test case with an unbalanced tree
  const unbalancedRoot = new TreeNode(1);
  unbalancedRoot.left = new TreeNode(2);
  unbalancedRoot.left.left = new TreeNode(3);

//   console.log("Depth of the unbalanced tree:", calculateDepth(unbalancedRoot)); // Output: 3
}
