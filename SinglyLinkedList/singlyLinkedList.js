class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
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

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next !== null) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) return undefined

    const currentHead = this.head
    this.head = this.head.next
    currentHead.next = null
    this.length--

    if (this.length === 0) this.tail = null

    return currentHead
  }

  unshift(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let current = this.head
    let counter = 0

    while (counter < index) {
      current = current.next
      counter++
    }

    return current
  }

  set(index, value) {
    const foundNode = this.get(index)

    if (!foundNode) return false

    foundNode.value = value
    return true
  }
}

const list = new SinglyLinkedList()
list.unshift(2)
list.unshift(3)
list.unshift(4)
list.unshift(5)
list.unshift(6)

console.log(list.get(3))
console.log(list.set(3, '!'))
// console.log(JSON.stringify(list, null, 2))
// console.dir(list, { depth: null })
list.print()
