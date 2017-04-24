const Node = require('./node')

class Stack {
  constructor () {
    this.storage = {}
    this.tail = 0
  }

  push (val) {
    const newNode = new Node(val)

    this.storage[this.tail ++] = newNode
    newNode.nextNode = this.tail

    return newNode
  }

  pop () {
    (this.tail <= 0) ? this.tail = 0 : this.tail --
    delete this.storage[this.tail]
  }

  count () {
    return Object.keys(this.storage).length
  }

  peek () {
    return this.storage[this.tail - 1]
  }

  isEmpty () {
    return Object.keys(this.storage).length === 0 ? true : false
  }
}

module.exports = Stack
