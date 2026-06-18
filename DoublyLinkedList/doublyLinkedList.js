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

  unshift(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.tail = this.head = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  shift() {
    if (this.head === null) return undefined

    const currentHead = this.head

    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = currentHead.next
      this.head.prev = null

      currentHead.next = null
    }

    this.length--
    return currentHead
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

  printDetailed() {
    const values = []
    let current = this.head

    while (current) {
      values.push(current)
      current = current.next
    }

    console.log(values)
  }
}

const list = new DoublyLinkedList()

list.unshift(99)
list.unshift(100)
list.unshift(101)
list.push(102)

console.log(list.shift())
console.log(list.shift())

list.printDetailed()
