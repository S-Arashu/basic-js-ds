const { NotImplementedError } = require("../lib/errors");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (!this.head) return null;

    const result = {
      value: this.head.value,
      next: null,
    };

    let current = this.head.next;
    let resultCurrent = result;

    while (current) {
      resultCurrent.next = {
        value: current.value,
        next: null,
      };
      resultCurrent = resultCurrent.next;
      current = current.next;
    }

    return result;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return current.value;
  }
}

module.exports = {
  Queue,
};
