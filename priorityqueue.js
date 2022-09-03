class Node {
    constructor(val, prio = 5) {
        this.val = val;
        this.prio = prio;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(val, prio) {
        // push the node into the heap
        let node = new Node(val, prio);
        this.heap.push(node);

        // keep track of the index of that node
        let mainIndex = this.heap.length - 1;

        while (mainIndex > 0) {
            // calculate the parent index
            let parentIndex = Math.floor((mainIndex - 1) / 2);
            // if the parent is higher priority than the target index, then we're done.
            if (this.heap[mainIndex].prio > this.heap[parentIndex].prio) break;

            // swap procedure
            this.heap[mainIndex] = this.heap[parentIndex];
            this.heap[parentIndex] = node;
            // set new index
            mainIndex = parentIndex;
        }

        return this.heap;
    }
    dequeue() {
        // swap the head and the last element on the heap
        let extract = this.heap[0];
        let end = this.heap.pop();
        let length = this.heap.length;
        if (length > 0) {
            this.heap[0] = end;
            // 
            let mainIndex = 0;
            // keep track of swapped element
            let node = this.heap[0];
            while (true) {
                // sink down procedure
                let leftIndex = mainIndex * 2 + 1;
                let rightIndex = mainIndex * 2 + 2;
                let leftElement, rightElement;
                let swap = null;

                // keep track if index is within the heap
                if (leftIndex < length) {
                    leftElement = this.heap[leftIndex];
                    if (leftElement.prio < node.prio) {
                        swap = leftIndex;
                    }
                }

                if (rightIndex < length) {
                    rightElement = this.heap[rightIndex];
                    if (swap === null && rightElement.prio < node.prio || swap !== null && rightElement.prio < leftElement.prio) {
                        swap = rightIndex;
                    }
                }

                // perform swap procedure
                // if no swap break loop
                if (swap === null) break;
                this.heap[mainIndex] = this.heap[swap];
                this.heap[swap] = node;
                mainIndex = swap;
            }
        }


        return extract;
    }
}

let q = new PriorityQueue();

q.enqueue(10, 5);
q.enqueue(20, 1);
q.enqueue(2, 3);
q.enqueue(15, 3);
q.enqueue(25, 2);
console.log(q.heap);
q.dequeue();
console.log(q.heap);
q.dequeue();
console.log(q.heap);