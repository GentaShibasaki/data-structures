class Heap {
  constructor() {
    this.storage = [];
  }

  insert(value) {
    this.storage.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.storage.length - 1;
    while (index > 0) {
      let tmp = this.storage[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.storage[parentIndex];

      if (parent >= tmp) break;
      this.storage[index] = parent;
      this.storage[parentIndex] = tmp;
      index = parentIndex;
    }
  }
}

module.exports = Heap;
