const Stack = require('../stack/stack')
const Node = require('./node')

class QueueWithTwoStacks {
  constructor () {
    this.stackIn = new Stack()
    this.stackOut = new Stack()
  }

  isEmpty () {
    return this.stackIn.isEmpty() && this.stackOut.isEmpty() ? true : false
  }

  count () {
    return Object.keys(this.stackIn).length + Object.keys(this.stackOut).length
  }

  enqueue (val) {
    return this.stackIn.push(val)
  }

  dequeue () {
    if (this.stackOut.isEmpty) this.transferStacks()
    this.stackOut.pop()
  }

  transferStacks () {
    while (!this.stackIn.isEmpty()) {
      this.stackOut.push(this.stackIn.pop())
      this.transferStacks()
    }

    return this.stackOut
  }

  peek () {
    if (this.stackIn.count() > 0) this.transferStacks()
    return this.StackOut.peek()
  }
}

module.exports = QueueWithTwoStacks
