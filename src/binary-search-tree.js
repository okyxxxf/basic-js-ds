const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.square = null;
  }

  root() {
    return this.square;
  }

  add(data) {
    this.square = addWithin(this.square, data);

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data == data){
        return node;
      }

      if(data < node.data){
        node.left = addWithin(node.left, data);
      }
      else{
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.square, data);

    function searchWithin(node, data){
      if(node == null){
        return false;
      }
      if(data == node.data){
        return true;
      }

      else if(data > node.data){
        return searchWithin(node.right, data);
      }
      else{
        return searchWithin(node.left, data);
      }
    }
  }

  find(data) {
    return findWithin(this.square, data);

    function findWithin(node, data){
      if(node == null){
        return null;
      }

      if(node.data == data){
        return node;
      }
      else if(data > node.data){
        return findWithin(node.right, data);
      }
      else{
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    this.square = removeNode(this.square, data);

    function removeNode(node, data){
      if(node == null){
        return null;
      }

      if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }
      else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }
      else{
        if(!node.right && !node.left){
          return null;
        }
        else if(!node.right && node.left){
          node = node.left;
          return node;
        }
        else if(node.right && !node.left){
          node = node.right;
          return node;
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }

          node.data = minRight.data;

          node.right = removeNode(node.right, minRight.data);

          return node;
      }
    }
  }

  min() {
    if(!this.root){
      return null;
    }

    let node = this.root();
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.root){
      return null;
    }

    let node = this.root();
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};