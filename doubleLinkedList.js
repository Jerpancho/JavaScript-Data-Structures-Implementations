class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            // main diff from singly linked list
            // must point the node back towards the previous node 
            // which is the tail
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    print() {
        let node = this.head;
        let arr = [];
        while (node) {
            arr.push(node);
            node = node.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(4);
list.print();