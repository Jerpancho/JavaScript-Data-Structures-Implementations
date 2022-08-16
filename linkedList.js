// node 
// - data - val
// - next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // adds a new node to the end of the list
    push(val) {
        let temp = new Node(val);
        // if head is empty
        // then new node will be head and tail
        if (this.head === null) {
            this.head = temp;
            this.tail = this.head;
        }
        else {
            // else tail.next becomes new node
            // and tail becomes new node
            this.tail.next = temp;
            this.tail = this.tail.next;
        }
        this.length += 1;
        return this;
    }
    // pops the node at the end of the list
    pop() {
        if (!this.head) {
            return undefined;
        }
        // two pointers one is moving 1 step farther than the other
        let curr = this.head;
        let newTail = curr;
        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        // once we exit the loop meaning curr has reached the end of the list:
        // newTail is one node behind curr and we will set tail to the new Tail
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return the node that was 'popped' of the list;
        return curr;
    }
    // removes the node at the head of the list;
    shift() {
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return node;
    }

    // adding a new node to the head of the list
    unShift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
        return this;
    }
    printList() {
        if (this.head != null) {
            let node = this.head;
            while (node != null) {
                console.log(node.val);
                node = node.next;
            }
        }

    }
}

let list = new SinglyLinkedList();

list.push("test");
list.push("another");
list.push("World");
list.push("final");
list.pop();
list.shift();
list.shift();
list.unShift("Hello");
list.printList();