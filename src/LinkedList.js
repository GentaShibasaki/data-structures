function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    let newNode = new Node(value);
    this.tail = newNode;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (!this.head) {
      this.head = newNode;
    }
    return newNode;
  }

  removeHead() {
    let result = "";
    // if (this.head.next === null) {
    // this = {};
    // } else {
    result = this.head;
    this.head = this.head.next;
    // }
    return result;
  }

  findNode(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  // forEach(callback) {}

  // print() {}

  // insertHead(value) {}

  // insertAfter(refNode, value) {}

  // removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
