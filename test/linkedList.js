const expect = require('chai').expect;
const LinkedList = require('../lib/trees/LinkedList')

class Node {
  constructor(value, tail) {
    this.value = value;
    this.tail = null
  }
}

describe('LinkedList', () => {
  let testList
  beforeEach(() => testList = new LinkedList())

  it('should instantiate with no head', () => {
    expect(testList.head).to.be.null
  });

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

  describe('#append()', () => {
    it('appends node when given a value', () => {
      const nodeCount = 4

      for(let i = 0; i < nodeCount ; i++)  {
        testList.append(Math.floor(Math.random() * 100))
      }
      expect(testList.counter).to.equal(nodeCount)
    })
  })

  describe('#print()', () => {
    it('logs all current nodes', () => {
      let printedNodes = ''

      for(let i = 0; i < 4; i++)  {
        const mockNode = Math.floor(Math.random() * 100)

        printedNodes += `${mockNode} : `
        testList.append(mockNode)
      }

      printedNodes += `null`
      expect(testList.print()).to.equal(printedNodes)
    })

    it('handles a headless list', () => {
      expect(testList.print()).to.equal('null')
    })
  })

  describe('#forEach()', () => {
    it('can apply a function to each node', () => {
      const double = node => node.value * 2
      for(let i = 1; i < 4 ; i++)  { testList.append(i) }

      const answer = testList.forEach(double)
      expect(answer).to.equal(`2 : 4 : 6 : null`)
    })
  })
});


