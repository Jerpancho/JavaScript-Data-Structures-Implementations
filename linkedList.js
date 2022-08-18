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
    // gets the value of the node at the given index
    get(i) {
        if (i < 0 || i >= this.length) return undefined;
        let node = this.head;
        for (let j = 0; j < i; j++) {
            node = node.next;
        }
        return node;
    }
    // goes to the node at the given index and changes its value
    set(i, val) {
        let node = this.get(i);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    // insert a new node at the given index
    insert(i, value) {
        if (i < 0 || i > this.length) return false;

        if (i === this.length) {
            this.push(value);
        }
        else if (i === 0) {
            this.unShift(value);
        }
        else {
            let newNode = new Node(value);
            let node = this.get(i - 1);

            //1->5 insert(3) ==> 1->3->5
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length += 1;
        return true;
    }
    // removes the node at the given index, return the removed item
    remove(i) {
        if (i < 0 || i >= this.length) return false;
        // if at the end of the list then just remove end
        if (i === this.length - 1) {
            return this.pop();
        }
        if (i === 0) {
            return this.shift();
        }
        let node = this.get(i - 1);
        let removed = node.next;

        node.next = node.next.next;
        this.length -= 1;
        return removed;
    }
    // reverses the nodes of the linked list
    reverse() {
        // swap the head and the tail
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;
        // 

        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this;
    }
    reverseHead() {
        let prev = null;
        let curr = this.head;
        let next;

        this.tail = curr;
        // while curr is not null
        while (curr) {
            // keep track of the next node before severing and repairing connection
            next = curr.next;
            // perform reverse operation
            curr.next = prev;
            // move the operation forward
            prev = curr;
            curr = next;
        }
        // the new head will just be previous
        this.head = prev;
        // otherwise return whole list
        return this;
    }
    printList() {
        let arr = [];
        if (this.head != null) {
            let node = this.head;
            while (node != null) {
                arr.push(node.val);
                node = node.next;
            }
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();

list.push("test");
list.push("another");
list.push("World");
list.push("final");
list.unShift("Hello");
list.printList();
list.reverseHead();
list.printList();