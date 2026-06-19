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

  get(index) {
    if (index < 0 || index >= this.length) return null
    const middleIndex = Math.floor(this.length / 2)

    let foundNode
    if (index <= middleIndex) {
      foundNode = this.head
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next
      }
    } else {
      foundNode = this.tail
      for (let i = this.length - 1; i > index; i--) {
        foundNode = foundNode.prev
      }
    }

    return foundNode
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
list.unshift(102)
list.push(98)

//sth wrong fix
console.log(list.get(-1))
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
console.log(list.get(4))
console.log(list.get(5))

list.print()
