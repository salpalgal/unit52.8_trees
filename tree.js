/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    
    if(!this.root) return 0;
    let root = this.root;
    let sum = this.root.val;
 

    function addSum(node){
       
      for(let child of node.children){
        sum += child.val
        if(Array.isArray(child.children)){
          addSum(child)
        }
        
      }
    }
    addSum(this.root)
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;
    let count = 0;
    function countArray(node){
      for(let child of node.children){
        if(child.val%2===0){
          count+=1
        }if(Array.isArray(child.children)){
          countArray(child)
        }
        
      }
    }
    countArray(this.root)
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 :0
    function countGreaterThanX(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          count+=1
        }if(Array.isArray(child.children)){
          countGreaterThanX(child)
        }
      }
    }
    countGreaterThanX(this.root)
    return count

  }
}

module.exports = { Tree, TreeNode };
