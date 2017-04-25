const expect = require('chai').expect
const LinkedList = require('../lib/trees/LinkedList')

class Node {
  constructor (value, tail) {
    this.value = value
    this.tail = null
  }
}

describe('LinkedList', () => {
  let testList
  beforeEach(() => testList = new LinkedList())

  it('should instantiate with no head', () => {
    expect(testList.head).to.be.null
  })

  describe('#get tail', () => {
    it('return null when there is no tail', () => {
      expect(testList.tail).to.be.null
    })

    it('return the correct node as a tail object', () => {
      testList.append(3)
      const tailNode = { value: 3, tail: null }

      expect(testList.tail).to.eql(tailNode)
      expect(testList.tail.value).to.equal(tailNode.value)
    })
  })

  describe('tail', () => {
    it('can #append() node when given a value', () => {
      const nodeCount = 4

      for (let i = 0; i < nodeCount; i++) {
        testList.append(Math.floor(Math.random() * 100))
      }
      expect(testList.counter).to.equal(nodeCount)
    })

    it('can #append() to an emptyList', () => {
      testList.append(1)
      expect(testList.counter).to.equal(1)
      expect(testList.print()).to.equal(`1 : null`)
    })

    it('can #removeTail()', () => {
      const nodeCount = 4
      for (let i = 0; i < nodeCount; i++) {
        testList.append(i)
      }

      expect(testList.removeTail()).to.equal(nodeCount - 1)
      expect(testList.tail).to.eql({value: 2, tail: null})
    })
  })

  describe('#print()', () => {
    it('logs all current nodes', () => {
      let printedNodes = ''

      for (let i = 0; i < 4; i++) {
        const mockNode = Math.floor(Math.random() * 100)

        printedNodes += `${mockNode} : `
        testList.append(mockNode)
      }

      printedNodes += `null`
      expect(testList.print()).to.equal(printedNodes)
    })

    xit('handles a headless list', () => {
      expect(testList.print()).to.eql(`This is a headless LinkedList. Please add a node`)
    })
  })

  describe('#forEach()', () => {
    it('can apply a function to each node', () => {
      const double = node => node.value * 2
      for (let i = 1; i < 4; i++) { testList.append(i) }

      const answer = testList.forEach(double)
      expect(answer).to.equal(`2 : 4 : 6 : null`)
    })
  })

  describe('#remove', () => {
    describe('#removeAfter()', () => {
      it('removes a node when given a value', () => {
        for (let i = 1; i <= 5; i++) { testList.append(i) }
        const removedNode = testList.removeAfter(2)

        expect(testList.print()).to.equal(`1 : 2 : 4 : 5 : null`)
        expect(removedNode).to.have.property('value').and.equal(3)
      })

      xit('returns error if value is not found', () => {
        const searchVal = 8

        for (let i = 1; i <= 5; i++) { testList.append(i) }

        expect(testList.removeAfter(searchVal)).to.eql(new Error(`Error: Arg: ${searchVal} was not found`))
      })
    })

    describe('#removeBefore()', () => {
      it('removes a node when given a value', () => {
        for (let i = 1; i <= 5; i++) { testList.append(i) }
        const removedNode = testList.removeBefore(4)

        expect(testList.print()).to.equal(`1 : 2 : 4 : 5 : null`)
        expect(removedNode).to.have.property('value').and.equal(3)
      })
    })
  })

  describe('insert', () => {
    describe('#insertBefore()', () => {
      it('creates a new Node and inserts it at the correct location', () => {
        for (let i = 1; i <= 5; i++) { testList.append(i) }

        testList.insertBefore(3, 'new')
        expect(testList.print()).to.eql('1 : 2 : new : 3 : 4 : 5 : null')
      })
    })

    describe('#insertAfter()', () => {
      it('creates a new Node and inserts it at the correct location', () => {
        for (let i = 1; i <= 5; i++) { testList.append(i) }

        testList.insertAfter(3, 'new')
        expect(testList.print()).to.eql('1 : 2 : 3 : new : 4 : 5 : null')
      })
    })
  })

  describe('Head', () => {
    describe('insertHead', () => {
      it('can insert a new head when given a value', () => {
        for (let i = 1; i < 4; i++) { testList.append(i) }

        testList.insertHead('new head')
        expect(testList.print()).to.equal('new head : 1 : 2 : 3 : null')
      })
    })

    describe('removeHead', () => {
      it('can remove the current Head', () => {
        for (let i = 1; i < 4; i++) { testList.append(i) }

        testList.removeHead()
        expect(testList.print()).to.equal('2 : 3 : null')
      })
    })
  })

  describe('#find()', () => {
    it('can return a specific node when given a value', () => {
      for (let i = 1; i < 4; i++) { testList.append(i) }

      const node = testList.findNode(2)
      expect(node).to.eql({ value: 2, tail: { value: 3, tail: null} })
    })
  })

  describe('#findPreviousNode()', () => {
    it('can return a previousNode when given a target value', () => {
      for (let i = 1; i < 4; i++) { testList.append(i) }

      const node = testList.findPreviousNode(3)
      expect(node).to.eql({ value: 2, tail: { value: 3, tail: null} })
    })
  })
})

