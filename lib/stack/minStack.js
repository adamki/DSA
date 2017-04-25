const Stack = require('./stack')
const Node = require('./node')

class MinStack {
  constructor () {
    this.storage = {}
    this.count = 0
    this.min = new Stack()
  }

  push (val) {
    let newNode = new Node(val)

    if (!this.last() || newNode.val < this.last().val) {
      this.min.push(val)
    } else {
      this.min.push(this.last().val)
    }

    this.storage[this.count ++ ] = newNode
    newNode.nextNode = this.count
    return newNode
  }

  pop () {
    (this.count <= 0) ? this.count = 0 : this.count --
    const removedNode = this.storage[this.count]

    this.min.pop()
    delete this.storage[this.count]

    return removedNode
  }

  count () {
    return this.count
  }

  minNode () {
    return this.min.last()
  }

  last () {
    return this.storage[this.count - 1]
  }
}

let minStack = new MinStack()

