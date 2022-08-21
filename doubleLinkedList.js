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

    pop() {
        // if there is no head then return undefined
        if (!this.head) return undefined;
        //
        let node = this.tail;
        // if the length is one then set the head and tail to null
        if (this.tail.prev === null) {
            node = this.tail;
            this.head = null;
            this.tail = null;
        }
        else {
            // set the tail to be the previous node
            // and remove the next pointer to cut connection
            this.tail = this.tail.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length -= 1;
        return node;
    }

    // removes node from beginning
    shift() {
        if (!this.head) return undefined;
        let node = this.head;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length -= 1;
        return node;
    }
    // adds a new node to the beginning;
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length += 1;
        return this;
    }
    // get node at the ith index (note: zero indexing)
    get(i) {
        if (i < 0 || i >= this.length) return null;
        let mid = Math.floor(this.length / 2);
        let node = null;
        if (i <= mid) {
            console.log("working from start")
            node = this.head;
            for (let j = 0; j < i; j++) {
                node = node.next;
            }
        }
        else {
            console.log("working from end")
            node = this.tail;
            for (let n = this.length; n > i + 1; n--) {
                node = node.prev;
            }
        }
        return node;
    }

    set(i, val) {
        let node = this.get(i);
        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            this.push(val);
        }
        else if (index === 0) {
            this.unshift(val);
        }
        else {
            let node = new Node(val);
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;
            // point the new node towards the current and the next index after current
            node.prev = prevNode;
            node.next = nextNode;
            // point the curr nodes next pointer towards the new node 
            // point next nodes previous pointer to the node as well
            prevNode.next = node;
            nextNode.prev = node;
        }
        this.length += 1;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        let node;
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        // get the previous node point at the node after the next node;
        // get the next node to point to the node befor the next node;
        node = this.get(index);
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;

        node.next = null;
        node.prev = null;
        this.length -= 1;

        return node;
    }

    reverse() {
        // get the current node
        // extra: swap the head and tail
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        // add two more pointer nodes previous and null
        let prev = null;
        let next;
        while (curr) {
            // keep track of next node
            next = curr.next;
            // swap operation
            curr.next = prev;
            curr.prev = next;
            // move operation forward (in this exact order)
            prev = curr;
            curr = next;
        }
        // return list or head (which is prev or this.head)
        return prev;
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

let list = new DoublyLinkedList();

list.unshift(2);
list.push(3);
list.unshift(1);
list.push(4);
list.push(5);
list.push(6);
list.print();
list.reverse();
list.print();