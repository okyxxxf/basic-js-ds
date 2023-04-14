const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor(){
    this.head;
    this.tail;
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let node = new ListNode(value);
    if(!this.head && !this.tail){
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node
  }

  dequeue() {
    if(!this.tail){
      return null;
    }
    let deleteNode = this.head;
    if(this.head == this.tail){
      this.head == null;
      this.tail == null;
      return deleteNode.value;
    }
    else{
      this.head = deleteNode.next;
      return deleteNode.value;
    }

  }
}

module.exports = {
  Queue
};
