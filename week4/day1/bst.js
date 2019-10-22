
class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    min() {
        // go left all the way
        if(this.root === null) {
            throw new Error("Tree is empty!");
        }
        var runner = this.root;
        while(runner) {
            if(runner.left === null) {
                return runner.value;
            }
            runner = runner.left;
        }
    }

    max() {
        // go right all the way
        if(this.root === null) {
            throw new Error("Tree is empty!");
        }
        var runner = this.root;
        while(runner) {
            if(runner.right === null) {
                return runner.value;
            }
            runner = runner.right;
        }
    }

    size(node = this.root) {
        if(node === null) {
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }
    // size(5) + 1
    // size(3) + 1
    // size(null) + 0
    // size(null) + 0
    // size(10) + 1
    // size(7) + 1
    // size(null) + 0
    // size(null) + 0
    // size(15) + 1
    // size(null) + 0
    // size(null) + 0

    contains(value, node=this.root) {
        // check node for value
        if(node === null) {
            return false;
        }
        if(node.value === value) {
            return true;
        }

        // if node doesn't have it, look in a different direction
        if(value > node.value) {
            // look right
            return this.contains(value, node.right);
        } else {
            // look left
            return this.contains(value, node.left);
        }
    }


    add(value, node=this.root) {
        // is there even a root?
        if(this.root === null) {
            this.root = new BSTNode(value);
            return;
        }

        // which way?
        if(value >= node.value) {
            // going right!
            if(node.right === null) {
                node.right = new BSTNode(value);
                return;
            } else {
                this.add(value, node.right);
            }
        } else {
            if(node.left === null) {
                node.left = new BSTNode(value);
                return;
            } else {
                this.add(value, node.left);
            }
        }


    }
}

var tree = new BST();
tree.add(5);
tree.add(3);
tree.add(10);
tree.add(7);
tree.add(15);