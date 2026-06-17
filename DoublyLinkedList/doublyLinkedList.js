class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.tail === null) return undefined

    const currentTail = this.tail

    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = currentTail.prev
      this.tail.next = null

      currentTail.prev = null
    }
    this.length--
    return currentTail
  }

  print() {
    const values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values)
  }
}

const list = new DoublyLinkedList()

list.push(99)
list.push(100)
list.push(101)
list.push(102)

console.log(list.pop())

console.log(list)
list.print()
