
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        // pushing at the front of the list (like unshift)
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = this.first;
        }
        else {
            node.next = this.first;
            this.first = node;
        }
        this.size += 1;
        return this.size;
    }
    pop() {
        if (!this.first) return undefined;

        let node = this.first;
        if (!this.first.next) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
            node.next = null;
        }

        this.size -= 1;
        return node;
    }

    print() {
        let arr = [];
        let node = this.first;
        while (node) {
            arr.push(node.val);
            node = node.next;
        }

        console.log(arr);
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.popLast();
stack.print();
