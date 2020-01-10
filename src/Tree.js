class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newNode = new Tree(value);
    this.children.push(newNode);
  }

  contains(searchValue) {
    function traverseTree(children, searchValue) {
      if (children.length !== 0) {
        for (const item of children) {
          if (item.value === searchValue) {
            return true;
          } else if (traverseTree(item.children, searchValue)) {
            return true;
          }
        }
      }
      return false;
    }

    if (this.value === searchValue) return true;

    return traverseTree(this.children, searchValue);
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  // traverseDepthFirst(fn) {}

  // traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
