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
    const recurse = node => (node && node.tail) ? recurse(node.tail) : node
    return recurse(this.head)
  }

  forEach (callbackFn) {
    let iterate = node => (!node.tail) ? `${callbackFn(node)} : null` : `${callbackFn(node)} : ${iterate(node.tail)}`
    return (!this.head) ? 'null' : `${iterate(this.head)}`
  }

  print () {
    return this.forEach((node) => `${node.value}`)
  }

  findNode (value) {
    const nodeFinder = (node) => (node.value === value) ? node : nodeFinder(node.tail)
    return nodeFinder(this.head)
  }

  findPreviousNode (refNodeVal) {
    const target = (node) => (node.tail.value !== refNodeVal) ? node.tail : target(node.tail)
    return target(this.head)
  }

  removeSwap (n1, n2) {
    const removedNode = n1.tail
    n1.tail = n2
    this.counter --
    return removedNode
  }

  insertSwap (newNode, temp) {
    newNode.tail = temp.tail
    temp.tail = newNode
    return ++ this.counter
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
    const target = this.findPreviousNode(refNodeVal)
    return this.removeSwap(target, target.tail.tail)
  }

  removeAfter (refNodeVal) {
    const target = this.findNode(refNodeVal)
    return this.removeSwap(target, target.tail.tail)
  }

  insertBefore (refNodeVal, value) {
    return this.insertSwap(new Node(value), this.findPreviousNode(refNodeVal))
  }

  insertAfter (refNodeVal, value) {
    return this.insertSwap(new Node(value), this.findNode(refNodeVal))
  }

  append (value) {
    (!this.head) ? this.insertHead(value) : this.insertSwap(new Node(value), this.tail)
  }

  insertHead (value) {
    const oldHead = this.head
    this.head = new Node(value)
    this.head.tail = oldHead
    return ++ this.counter
  }

  removeHead () {
    this.head = this.head.tail
    return -- this.counter
  }

  removeTail () {
    const target = this.findPreviousNode(this.tail.value)
    target.tail.tail = null
    return -- this.counter
  }
}

module.exports = LinkedList
