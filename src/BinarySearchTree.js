class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    let parent = this;
    let check = true;
    while (check) {
      if (parent.value > value && parent.left !== null) {
        parent = parent.left;
      } else if (parent.value < value && parent.right !== null) {
        parent = parent.right;
      } else if (parent.value > value && parent.left === null) {
        parent.left = newNode;
        check = false;
      } else if (parent.value < value && parent.right === null) {
        parent.right = newNode;
        check = false;
      } else if (parent.value === value) {
        break;
      }
    }

    return this;
  }

  contains(value) {
    function recursion(parent) {
      if (parent.value === value) return true;
      if (parent.value > value && parent.left !== null)
        return recursion(parent.left);
      if (parent.value < value && parent.right !== null)
        return recursion(parent.right);
      return false;
    }

    return recursion(this);
  }

  traverseDepthFirstInOrder(func) {
    function recursion(parent, func) {
      if (parent.left === null) func(parent, func);
      if (parent.left !== null) recursion(parent.left, func);
      if (parent.left !== null || parent.right !== null) func(parent);
      if (parent.right !== null) recursion(parent.right, func);
    }
    recursion(this, func);
  }
}

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
