function Node(val) {
  this.val = val;
  this.next = null;
}

let MyLinkList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkList.prototype.addAtIndex = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkList.prototype.addToTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkList.prototype.addToIndex = function (val, index) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    this.addAtIndex(val);
    return;
  }
  let newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  this.size--;
};

MyLinkList.prototype.print = function () {
  let res = [];
  let curr = this.head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }
  console.log(res.join(" -> "));
};

let list = new MyLinkList();
list.addAtIndex(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToIndex(10, 0);
list.deleteAtIndex(1);
list.print();
