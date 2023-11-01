class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  getTail() {
    if (!this.head) return null;
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
    let previous = this.getTail();
    this.tail = new Node(value, null);
    previous.nextNode = this.tail;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();
list.append("День");
// list.append("Ночь");
// list.append("Вечер");
console.log(list);
