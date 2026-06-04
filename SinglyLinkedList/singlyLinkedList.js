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

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    else {
      const preNode = this.get(index - 1)
      const newNode = new Node(value)

      newNode.next = preNode.next
      preNode.next = newNode

      this.length++
      return true
    }
  }
}

const list = new SinglyLinkedList()
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)

console.log(list.insert(0, 'first'))
console.log(list.insert(3, '!'))
console.log(list.insert(list.length, 'last'))
console.log(list.insert(-1, 'nope'))
console.log(list.insert(list.length + 1, 'nope'))

list.print()
