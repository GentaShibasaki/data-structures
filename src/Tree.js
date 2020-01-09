class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newNode = new Tree(value);
    this.children.push(newNode);
  }

  contains(value) {
    function recursion(children, value) {
      // if ( child.value === value ) return true;
      if (children.length !== 0) {
        for (const item of children) {
          if (item.value === value) return true;
          if (recursion(item.children, value)) return true;
        }
      }
    }

    if (this.value === value) return true;

    return recursion(this.children, value) ? true : false;
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
