// for array implementation
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    let childIndex = this.heap.length - 1;
    if (childIndex < 1) return this.heap;

    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.heap[childIndex] > this.heap[parentIndex]) {
      // swap parent and child to bubble up
      let temp = this.heap[childIndex];
      this.heap[childIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;

      //   set new index of child and parent
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.heap;
  }
  // remove the head of the heap and down-heap the replaced root;
  extractMax() {
    // swap the max num with the end of the list
    let max = this.heap[0];
    let endHeap = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = endHeap;
      // perform down-heap procedure
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let index = 0;
    let value = this.heap[0];
    const length = this.heap.length;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.heap[leftIndex];
        if (leftChild > value) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        rightChild = this.heap[rightIndex];
        if (swap === null && rightChild > value || swap !== null && rightChild > leftChild) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = value;
      index = swap;
    }
  }
}

let heap = new MaxHeap();

heap.insert(5);
heap.insert(7);
heap.insert(6);
heap.insert(9);
heap.insert(24);
heap.insert(21);
heap.insert(35);
heap.insert(42);
heap.insert(84);
heap.insert(12);
console.log(heap.insert(31));
console.log(heap.extractMax());
