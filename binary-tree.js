/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0
    function findDepth(node){
     
      if(node.left === null && node.right === null) return 1;
      if(node.left === null) return findDepth(node.right) + 1;
      if(node.right === null) return findDepth(node.left) +1;

      return (
        Math.min(findDepth(node.left), findDepth(node.right)) + 1
      )
    }
    
    return findDepth(this.root)

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    function findMaxDepth(node){
      if(node.left === null & node.right === null) return 1;
      if(node.left === null) return findMaxDepth(node.right) +1;
      if(node.right === null) return findMaxDepth(node.left) +1;
      return (
        Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) +1
      )
    }
    return findMaxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    if(!this.root) return 0;
    function findMaxSum(node){
      if(node ===null) return 0
      
      let leftSum = findMaxSum(node.left);
      let rightSum = findMaxSum(node.right);
      sum = Math.max(sum, leftSum + rightSum + node.val)
      return(
        Math.max(0,leftSum +node.val, rightSum+ node.val) 
      )
    }
    findMaxSum(this.root)
    return sum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null
    let status = null
    let current = this.root.val
    let difference = current - lowerBound;
    let  queue = [this.root];
    while(queue.length){
      const item = queue.shift()
      const itemVal = item.val
      
      if(itemVal - lowerBound <= difference && itemVal-lowerBound > 0){
        current = item.val
        status = item.val  
      }
      if(item.left) queue.push(item.left)
      if(item.right) queue.push(item.right)
    }
    return status
  }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
