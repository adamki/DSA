class List {
  constructor(x, xs) {
    this.head = null
    this.tail = null
    this.head = () => x
    this.tail = () => xs
  }

  getHead() {
    return this.head()
  }

  getInfo() {

    return this.tail()
  }

}

const emptyList = new List()
const isEmpty = xs => xs === emptyList()
debugger

const l = new List(1, 2, 3, 4)
const  head = l.getHead()
const  tail = l.getInfo()

console.log(head, tail)




