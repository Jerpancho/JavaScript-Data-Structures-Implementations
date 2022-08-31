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
