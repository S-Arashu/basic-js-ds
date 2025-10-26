const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    return this.head || null;
  }

  add(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    }

    const tree = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          tree(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          tree(node.right);
        }
      }
    };

    tree(this.head);
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  has(data) {
    let current = this.head;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  remove(data) {
    this.head = deleteNode(this.head, data);

    function deleteNode(current, data) {
      if (data === current.data) {
        if (!current.left && !current.right) {
          return null;
        } else if (!current.left) {
          return current.right;
        } else if (!current.right) {
          return current.left;
        } else {
          let minOnRight = current.right;
          while (minOnRight.left) {
            minOnRight = minOnRight.left;
          }

          current.data = minOnRight.data;
          current.right = deleteNode(current.right, minOnRight.data);

          return current;
        }
      }

      if (data < current.data) {
        current.left = deleteNode(current.left, data);
        return current;
      }

      if (data > current.data) {
        current.right = deleteNode(current.right, data);
        return current;
      }

      if (!current) {
        return null;
      }
    }
  }

  min() {
    let current = this.head;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    let current = this.head;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
