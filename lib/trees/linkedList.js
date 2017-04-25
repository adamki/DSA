class Node {
  constructor (value) {
    this.value = value
    this.tail = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.counter = 0
  }

  get tail () {
    return this.getLast(this.head)
  }

  print () {
    let value = node => (!node.tail) ? `${node.value} : ${node.tail}` : `${node.value} : ${value(node.tail)}`
    return (!this.head) ? `null` : `${value(this.head)}`
  }

  findNode (value) {
    const nodeFinder = (node) => (node.value === value) ? node : nodeFinder(node.tail)
    return nodeFinder(this.head)
  }

  removeSwap (n1, n2, refNodeVal) {
    const removedNode = n1.tail
    n1.tail = n2
    this.counter --
    return removedNode
  }

  insertSwap (newNode, temp) {
    newNode.tail = temp.tail
    temp.tail = newNode
    this.counter ++
    return this.print()
  }

  errorHandler(type) {
    switch(type) {
      case 'hasHead':
        throw new Error('This is a headless LinkedList. Please add a node')
        break
      default:
       throw new Error('an error has occured')
    }
  }

  removeBefore (refNodeVal) {
    if (!this.head) { this.errorHandler('hasHead') }
    const blah = (node) => (node.tail.value !== refNodeVal) ? this.removeSwap(node.tail, node.tail.tail.tail) : blah(node.tail)
    return (!this.head) ? `null` : blah(this.head)
  }

  removeAfter (refNodeVal) {
    if (!this.head) { this.errorHandler('hasHead') }
    const blah = (node) => (node.tail.value !== refNodeVal) ? this.removeSwap(node, node.tail.tail, refNodeVal) : blah(node.tail)
    return blah(this.head)
  }

  insertAfter (refNodeVal, value) {
    if (!this.head) { this.errorHandler('hasHead') }
    this.insertSwap(new Node(value), this.findNode(refNodeVal))
  }

  insertBefore (refNodeVal, value) {
    const blah = (node) => (node.tail.value !== refNodeVal) ? blah(node.tail) : this.insertSwap(new Node(value), node)
    return blah(this.head)
  }

  forEach (callbackFn) {
    if (typeof callbackFn !== 'function') { throw new Error('argument must be typeof === function') }
    if (!this.head) { this.errorHandler('hasHead') }

    let iterate = node => (!node.tail) ? `${callbackFn(node)} : null` : `${callbackFn(node)} : ${iterate(node.tail)}`
    return (!this.head) ? 'null' : `${iterate(this.head)}`
  }

  append (value) {
    if (!this.head) {
      this.head = new Node(value)
    } else {
      let last = this.getLast(this.head)
      last.tail = new Node(value)
    }
    this.counter ++
  }

  insertHead (value) {
    const oldHead = this.head
    this.head = new Node(value)
    this.head.tail = oldHead
    this.counter ++
  }

  removeHead () {
    this.head = this.head.tail
    this.counter --
  }

  removeTail () {
    const nodeFinder = (node) => (!node.tail.tail) ? node : nodeFinder(node.tail)
    let newTail = nodeFinder(this.head)
    newTail.tail = null
    this.counter --
  }

  getLast (currentNode) {
    while (currentNode && currentNode.tail) {
      currentNode = currentNode.tail
    }

    return currentNode
  }

}

module.exports = LinkedList
