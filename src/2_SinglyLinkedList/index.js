// Do not use arrays!
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) throw new RangeError('Index hors limites');
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const newNode = new Node(value, current.next);
    current.next = newNode;
    this.length++;
  }

  removeFirst() {
    if (!this.head) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return removedValue;
  }

  removeLast() {
    if (!this.tail) return null;
    if (this.length === 1) return this.removeFirst();

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const removedValue = this.tail.value;
    current.next = null;
    this.tail = current;
    this.length--;
    return removedValue;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) throw new RangeError('Index hors limites');
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const removedValue = current.next.value;
    current.next = current.next.next;
    this.length--;
    return removedValue;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  getFirst() {
    return this.head ? this.head.value : null;
  }

  getLast() {
    return this.tail ? this.tail.value : null;
  }

  getAt(index) {
    if (index < 0 || index >= this.length) throw new RangeError('Index hors limites');
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
}
