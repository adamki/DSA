var Node = require('./node')

class Queue {
  constructor () {
    this.nodes = {}
    this.head = 0
    this.tail = 0
  }

  enqueue (val) {
    this.nodes[this.tail ++] = new Node(val)
  }

  dequeue () {
    delete this.nodes[this.head]
    if (this.head < this.tail) this.head ++
  }

  size () {
    return this.tail - this.head
  }
}

module.exports = Queue
