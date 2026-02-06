class LinkedListNode {
  data: number;
  next: LinkedListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;

  constructor() {
    this.head = null;
  }

  insertHead(value: number) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  insertTail(value: number) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  display() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  removeHead() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  }
}

const linkedList = new LinkedList();

linkedList.insertHead(11);
linkedList.insertHead(22);
linkedList.insertTail(100);
linkedList.insertTail(200);
linkedList.removeHead();
linkedList.removeHead();
linkedList.display();
