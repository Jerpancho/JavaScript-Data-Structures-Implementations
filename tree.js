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

    // searches thru the tree using breadth first search
    BFS() {
        if (!this.root) return undefined;
        //queue
        let q = [];
        let list = [];
        q.push(this.root);
        // while the q is not empty (has the root node)
        // dequeue from the q and if that node has left or right nodes, push them into the queue
        // keep track of dequeued nodes by pushing onto the list
        // if we're doing something else with the nodes instead perform different operation** 
        while (q.length !== 0) {
            let node = q.shift();
            list.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        return list;
    }
    // same but uses it as a way to find a value
    // useful if its not a binary search tree and instead an unordered tree
    BFS2(val) {
        if (!this.root) return false;
        //queue
        let q = [];
        q.push(this.root);
        while (q.length !== 0) {
            let node = q.shift();
            if (node.val === val) return node;

            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        return false;
    }
    // Depth first search traversal, preorder
    DFSPre() {
        if (!this.root) return undefined;
        let list = [];
        function helper(node) {
            if (node) list.push(node.val);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }
        helper(this.root);
        return list;
    }
    DFSPost() {
        if (!this.root) return undefined;
        let list = [];
        function helper(node) {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            if (node) list.push(node.val);
        }
        helper(this.root);
        return list;
    }
    DFSIn() {
        if (!this.root) return undefined;
        let list = [];
        function helper(node) {
            if (node.left) helper(node.left);
            if (node) list.push(node.val);
            if (node.right) helper(node.right);
        }
        helper(this.root);
        return list;
    }


}

let tree = new Tree();

tree.insert(8);
tree.insert(69);
tree.insert(4);
tree.insert(6);
tree.insert(53);
tree.insert(7);
tree.insert(3);
tree.insert(2);
console.log(tree);
console.log(tree.BFS());
console.log(tree.BFS2(8));
console.log(tree.DFSPre());