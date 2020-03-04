class Tree {
    constructor() {
        this.root = null
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function fizzBuzzTree(tree) {
    let newTree = new Tree();
    traverse(tree)
    return newTree
}


//HELPER FUNCTIONS 
///creates new node with fizzbuzz value

function newValue(node) {
    if(node === null) {
        return null
    }
    if (node.value % 3 === 0 && node.value % 5 === 0) {
        new Node ('fizzbuzz')
        // node.value = 'fizzbuzz'
    }
    if(node.value % 3 === 0) {
        // newTree.insert('fizz')
        new Node ('fizz')
        // node.value = 'fizz'
    } 
    if (node.value % 5 === 0) {
        new Node ('buzz')
        // node.left = new Node ('buzz')
        // node.value = 'buzz'
    } 
    if(node.value % 3 !== 0 && node.value % 5 !==0) {
        new Node(node.value.toString())
    }
}

function traverse(){
    function traverse(node) {
        if(node.left) traverse(node.left)
        newValue(node.value)
        if(node.right) traverse(node.right)
    }
    traverse(this.root)
}

//     inOrder () {
//         const data = [];
//         function traverse (node) {
//             if(node.left) traverse(node.left)
//             data.push(node.value)
//             if(node.right) traverse(node.right)
//         }
//         traverse(this.root)
//         return data;
//     }


module.exports= {fizzBuzzTree, Node, Tree}


///new tree class
///new node class 
///function that valuates & add's new node
///function that traverses 
///fizzbuzztree that takes in methods above 

//create a node class 

// class Node {
//     constructor(value) {
//         this.root = value;
//         this.left = null;
//         this.right = null;
//     }

// }

// class BinaryTree {

//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value)
//         if(this.root === null) {
//            return this.root = newNode;
//         }
//         var current = this.root;
//         while(true) {
//             if(value === current.value) return undefined;
//             if(value < current.value) {
//                 if(current.left === null) {
//                 return current.left = newNode;
//             }
//             current = current.left;
//         } else {
//             if(current.right ===null) {
//                 return current.right = newNode
//             }
//             current = current.right
//         }
//     }
// }

//     preOrder () {
//         const data = [];
//         function traverse (node) {
//             data.push(node.value);
//             if(node.left) traverse(node.left);
//             if(node.right)traverse(node.right)
//         }
//         traverse(this.root)
//         return data;
//     }

//     inOrder () {
//         const data = [];
//         function traverse (node) {
//             if(node.left) traverse(node.left)
//             data.push(node.value)
//             if(node.right) traverse(node.right)
//         }
//         traverse(this.root)
//         return data;
//     }

//     postOrder () {
//         const data = []
//         function traverse (node) {
//             if(node.left) traverse(node.left)
//             if(node.right) traverse(node.right)
//             data.push(node.value)
//         }
//         traverse(this.root)
//         return data;
//     }
// }

// module.exports = {Node, fizzBuzzTree}

