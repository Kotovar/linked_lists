class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  getHead() {
    return this.head;
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

  pop() {
    if (!this.head) {
      return `No items to delete`;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let penult = this.at(this.size() - 2);
    penult.nextNode = null;
    this.tail = penult;
  }

  contains(value) {
    if (!this.head) return `The current LinkedList is empty`;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    if (!this.head) return `The current LinkedList is empty`;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index++;
      currentNode = currentNode.nextNode;
    }
    return 0;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return (string += null);
  }

  insertAt(value, index) {
    if ((index ^ 0) !== index || index < 0) {
      return `wrong value`;
    }
    const range = this.size();
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === range) {
      this.append(value);
      return;
    }
    if (index > range) {
      return `Out of range`;
    }
    let currentIndex = this.at(index);
    let newElement = new Node(value, currentIndex);
    let previousIndex = this.at(index - 1);
    previousIndex.nextNode = newElement;
  }

  removeAt(index) {
    if ((index ^ 0) !== index || index < 0) {
      return `wrong value`;
    }
    const range = this.size() - 1;
    if (index === 0) {
      this.head = this.at(index + 1);
      return;
    }
    if (index === range) {
      this.pop();
      return;
    }
    if (index > range) {
      return `Out of range`;
    }
    let element = this.at(index);
    let previousIndex = this.at(index - 1);
    let nextIndex = this.at(index + 1);
    previousIndex.nextNode = nextIndex;
    element.nextNode = null;
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
list.append("Самый последний");
// console.log(list);
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.at(3));
// list.pop();
// console.log(list.size());
// console.log(list.contains("Перед хвостом"));
// console.log(list.find("Перед хвостом"));
// console.log(list.toString());
list.insertAt("НОВЕНЬКИЙ", 8);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
console.log(list);
