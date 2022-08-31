class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // push
    enqueue(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++;
        return this.size;
    }
    enqueue_node(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++;
        return this.size;
    }
    // shift for dequeue
    dequeue() {
        if (!this.head) return undefined;
        let node = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            node.next = null;
        }
        this.size -= 1;
        return node;
    }
    print() {
        let node = this.head;
        let arr = [];
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr);
    }
}

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.print();
// q.dequeue();
// q.print();

module.exports = { Queue };