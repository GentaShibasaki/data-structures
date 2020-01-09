class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(node) {
    if (!this.nodes[node]) {
      this.nodes[node] = [];
    } else {
      this.nodes[node].push(node);
    }
  }
  removeNode(node) {
    delete this.nodes[node];
    for (const key in this.nodes) {
      this.nodes[key] = this.nodes[key].filter((item) => item !== node);
    }
  }

  contains(node) {
    for (const key in this.nodes) {
      if (+key === node) return true;
    }
    return false;
  }

  addEdge(node, edge) {
    if (!this.nodes[edge] || !this.nodes[node]) return "Invalid node value";
    if (this.nodes[edge] && this.nodes[edge][0] !== node) {
      this.nodes[node].push(edge);
      this.nodes[edge].push(node);
    }
  }

  removeEdge(node, edge) {
    if (this.nodes[edge][0] === node) {
      this.nodes[node].pop();
      this.nodes[edge].pop();
    }
  }

  hasEdge(node, edge) {
    for (const key in this.nodes) {
      if (+key === node && this.nodes[key][0] === edge) {
        return true;
      }
    }
    return false;
  }
}
module.exports = Graph;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
