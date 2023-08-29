#!/usr/bin/env node
"use strict";

// linked list is a linear data structures
// there are an order to construct and traverse

// non-linear data structures don't have to be arranged in order.
// It can be traversed non-sequentially

// Memory allocation
// array - contiguous block of memory
// linked list - not contiguous in memory, can grow dynamically

// array - static data structures
// linked list - dynamic data structures

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (!value) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  getSize() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    let store = this.head;
    const temp = this.head.next;
    this.head = temp;
    this.length--;

    return store;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    for (let i = 0; i < this.length - 2; i++) {
      temp = temp.next;
    }
    const store = temp.next;
    temp.next = null;
    this.tail = temp;
    this.length--;

    return store;
  }

  contains(value) {
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    let i = 0;
    let temp = this.head;
    while (i < this.length) {
      if (temp.value === value) break;
      temp = temp.next;
      i++;
    }

    return i;
  }

  toString() {
    let temp = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (i === this.length) console.log(null);
      else {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === this.length) this.append(value);
    else if (index === 0) this.prepend(value);
    else {
      const newNode = new Node(value);

      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = before.next;
      }

      let after = this.head;
      for (let i = 0; i < index; i++) {
        after = after.next;
      }

      newNode.next = after;
      temp.next = newNode;
    }
    this.length++;

    return this;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return undefined;

    let store;
    if (index === 0) {
      store = this.shift();
    } else if (index === this.length - 1) {
      store = this.pop();
    } else {
      let before = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === index - 1) break;
        before = before.next;
      }

      let temp = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === index) break;
        temp = temp.next;
      }
      const after = temp.next;

      store = temp;
      before.next = after;
      this.head = before;
      this.length--;
    }

    return store;
  }
}

const myLinkedList = new LinkedList();
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.append(5));
console.log(myLinkedList.getSize());
console.log(myLinkedList.getHead());
console.log(myLinkedList.getTail());
console.log(myLinkedList.at(1)); // 3
console.log(myLinkedList.shift()); // 1
console.log(myLinkedList.pop()); // 5
console.log(myLinkedList.contains(3)); // true
console.log(myLinkedList.find(3)); // index 1
console.log(myLinkedList.toString());
console.log(myLinkedList.removeAt(2)); // 4
console.log(myLinkedList.insertAt(10, 1));
