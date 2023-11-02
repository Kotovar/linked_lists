class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  getTail() {
    if (!this.head) return this.head;
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value, null);
      this.tail = this.head;
      return this;
    }
    let previousTail = this.getTail();
    this.tail = new Node(value, null);
    previousTail.nextNode = this.tail;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value, null);
      this.tail = this.head;
      return this;
    }
    let currentHead = this.head;
    this.head = new Node(value, currentHead);
    return this;
  }

  size() {
    let itogSize = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      itogSize++;
      currentNode = currentNode.nextNode;
    }
    return itogSize;
  }

  getHead() {
    return this.head;
  }

  at(index) {
    let startIndex = index;
    let currentNode = this.head;
    if (!this.head) return `The current LinkedList is empty`;
    while (index > 0 && currentNode) {
      currentNode = currentNode.nextNode;
      index--;
    }
    return currentNode ?? `The index ${startIndex} out of list`;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();
list.append("Голова").append("После головы");
list.append("Средний");
list.append("Перед хвостом");
list.append("Хвост");

list.prepend("Добавил в начало").prepend("Ещё один - самый первый");
console.log(list);
// console.log(list.size());
// console.log(list.getHead());
// console.log(list.getTail());
console.log(list.at(2));
