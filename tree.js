class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let head = this.root;
        while (true) {
            if (node.val > head.val) {
                if (head.right) {
                    head = head.right;
                }
                else {
                    head.right = node;
                    break;
                }
            }
            else {
                if (head.left) {
                    head = head.left;
                }
                else {
                    head.left = node;
                    break;
                }
            }
        }

        return this;
    }
    find(val) {
        // if root doesnt exist or value isnt correct datatype
        // return false
        if (!this.root || typeof (val) !== 'number') return false;
        let head = this.root;
        while (head) {
            if (val === head.val) return head;
            if (val > head.val) {
                head = head.right;
            }
            else {
                head = head.left;
            }
        }
        // if head becomes null then number doesnt exist in the tree
        return false;
    }
    contains(val, node = this.root) {
        if (!node) return false;

        if (node.val === val) return true;

        if (val < node.val) return this.find(val, node.left);

        else return this.find(val, node.right);
    }
}

let tree = new Tree();

tree.insert(8);
tree.insert(69);
tree.insert(4);
tree.insert(6);
tree.insert(53);
tree.insert(8);
tree.insert(8);
console.log(tree);
console.log(tree.find(12));
console.log(tree.find(69));