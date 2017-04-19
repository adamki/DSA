class Node {
  constructor(value) {
    this.value = value
    this.tail = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.counter = 0
  }

  get tail() {
    return this.getLast(this.head)
  }

  print() {
    let value = node => (!node.tail) ?
      `${node.value} : ${node.tail}` : `${node.value} : ${value(node.tail)}`

    return (!this.head) ? `null` : `${value(this.head)}`
  }

  forEach(callbackFn) {
    if (typeof callbackFn !== 'function') {throw new Error('argument must be typeof === function')}
    if (!this.head) {throw new Error('This List is headless. Please append a node using #append(val)')}

    let iterate = node => (!node.tail) ?
      `${callbackFn(node)} : null` :
      `${callbackFn(node)} : ${iterate(node.tail)}`

    return (!this.head) ? 'null' : `${iterate(this.head)}`
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value)
    } else {
      let last = this.getLast(this.head)
      last.tail = new Node(value)
    }
    this.counter ++
  }

  getLast(currentNode) {
    while(currentNode && currentNode.tail) {
      currentNode = currentNode.tail
    }

    return currentNode
  }

}

module.exports = LinkedList
