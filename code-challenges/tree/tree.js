//create a node class 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        if(this.root === null) {
           return this.root = newNode;
        }
        var current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(current.left === null) {
                return current.left = newNode;
            }
            current = current.left;
        } else {
            if(current.right ===null) {
                return current.right = newNode
            }
            current = current.right
        }
    }
}

    preOrder () {
        const data = [];
        function traverse (node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return data;
    }

    inOrder () {
        const data = [];
        function traverse (node) {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }

    postOrder () {
        const data = []
        function traverse (node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data;
    }
}

module.exports = {Node, BinaryTree}