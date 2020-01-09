const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    if (!this.storage[index]) this.storage[index] = value;
  }

  retrieve(key) {
    const index = simpleHash(key, this.limit);
    if (!this.storage[index]) return null;
    return this.storage[index];
  }

  remove(key) {
    const index = simpleHash(key, this.limit);
    if (!this.storage[index]) return false;
    delete this.storage[index];
    return true;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
