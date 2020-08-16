class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // the list is empty initially
    this.head = null;
    // the size of list is by default
    this.size = 0;
  }

  // Insert first node
  inserFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.inserFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let iterator = 0;
    while (iterator < index) {
      previous = current; // node before index
      iterator++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    if (index > this.size) {
      return null;
    }

    let current = this.head;
    let iterator = 0;
    while (iterator < index) {
      current = current.next;
      iterator++;
    }

    console.log(current.data);
    return;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }
    let iterator = 0;
    while (iterator < index) {
      previous = current;
      current = current.next;
      iterator++;
    }

    previous.next = current.next;
    this.size--;
    return;
  }

  // Clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Print the list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.inserFirst(19);
ll.inserFirst(13);
ll.inserFirst(7);
ll.insertLast(10);
ll.insertAt(8, 2);
ll.removeAt(0);
ll.clear();
// console.log(ll);
ll.printListData();

// ll.getAt(3);
