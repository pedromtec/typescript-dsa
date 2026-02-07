class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  #size: number;

  constructor() {
    this.head = null;
    this.#size = 0;
  }

  getSize() {
    return this.#size;
  }
  // O(1)
  insertHead(value: T) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.#size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.#size++;
  }
  // O(n)
  insertTail(value: T) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.#size++;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.#size++;
  }
  // O(n)
  display() {
    let currentNode = this.head;
    console.log('size =', this.getSize());
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  // O(1)
  removeHead() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
    this.#size--;
  }

  #getNode(index: number) {
    if (index < 0 || index >= this.getSize()) {
      return null;
    }

    let count = 0;
    let currentNode = this.head!;

    while (count < index && currentNode.next !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  get(index: number) {
    const node = this.#getNode(index);

    if (node === null) {
      return null;
    }

    return node.data;
  }

  insertAt(index: number, value: T) {
    if (!(index >= 0 && index <= this.getSize())) {
      return false;
    }

    if (index === 0) {
      this.insertHead(value);
    } else {
      const previousNode = this.#getNode(index - 1)!;
      const newNode = new LinkedListNode(value);

      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.#size++;
    }

    return true;
  }

  removeAt(index: number) {
    if (!(index >= 0 && index < this.getSize())) {
      return false;
    }

    if (index === 0) {
      this.removeHead();
    } else {
      const previousNode = this.#getNode(index - 1)!;
      previousNode.next = previousNode.next!.next;
      this.#size--;
    }
  }
}

const linkedList = new LinkedList<number>();

linkedList.insertTail(100);
linkedList.insertTail(200);
linkedList.insertTail(300); // 100, 200, 300
linkedList.insertAt(1, 500); // 100, 500, 200, 300
linkedList.display();
linkedList.removeAt(1); // 100, 200, 300
linkedList.removeAt(-1);
linkedList.display();
// console.log(linkedList.get(-1));
// console.log(linkedList.get(3));
