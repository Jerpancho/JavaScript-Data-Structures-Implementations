// node 
// - data - val
// - next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    push(s) {
        let node = this;
        while (node.next != null) {
            node = node.next;
        }
        node.next = new Node(s);
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
        }
        else {
            let temp = new Node(val);
            this.tail.next = temp;
            this.tail = this.tail.next;
        }
        this.length += 1;
    }
    printList() {
        let node = this.head;
        while (node != null) {
            console.log(node.val);
            node = node.next;
        }
    }
}

let list = new SinglyLinkedList();
list.push("test");
list.push("world");
list.push("another");
list.push("final");
list.printList();

