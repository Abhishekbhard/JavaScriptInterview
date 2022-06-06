const Node = require("./Node");
console.log(Node);
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  getFirst() {
    return this.head;
  }
  insertLast(val) {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode) {}
    }
  }
}
// insert(data,position=this.length){
//     let node= new this.ListNode(data)
// }
class ListNode {
  constructor(data, next) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let linkedList = new LinkedList(node1);
console.log(linkedList.head, "Bofore Clear");
console.log(linkedList.getLast(), "get last");
console.log(linkedList.getFirst(), "get First");
linkedList.clear();
console.log(linkedList.head, "After Clear");
