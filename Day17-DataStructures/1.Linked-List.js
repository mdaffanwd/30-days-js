// Activity 1: Linked List:
// task 1: Implement a Node class to represent an element in a linked list with properties val and next
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// task 2  Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  addToEnd(value) {
    const newNode = new Node(value);

    // If the list is empty, set the new node as the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse to the end of the list and add the new node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Remove a node from the end of the list
  removeFromEnd() {
    // If the list is empty, there's nothing to remove
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // If there's only one node, remove it
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // Traverse to the second-last node and remove the last node
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  // Display all nodes in the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);
list.display(); // Output: 10, 20, 30

list.removeFromEnd();
console.log("after deletion");
list.display();
