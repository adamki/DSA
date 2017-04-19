class Node {
  constructor(value, tail) {
    this.value = value;
    this.tail = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value)
    } else {
      let last = this.getTail()
      console.log('0000000' , last)
      last.tail = new Node(value)
    }
  }

  getTail() {
  }
}
module.exports = LinkedList

let myList = new LinkedList()
myList.append(3)
myList.append(9)
console.log(myList)
