const {BinaryTree} = require('./tree')

const tree =new BinaryTree()

tree.insert(13)
tree.insert(5)
tree.insert(20)
tree.insert(9)
tree.insert(7)

console.log(tree)

describe ('Create a tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        expect(new BinaryTree).toEqual({root: null})
    })
    it('Can successfully instantiate a tree with a single root node', () => {
        const tree = new BinaryTree()
        expect(tree.insert(13)).toEqual({value: 13, left:null, right: null})
    })

    // it('Can successfully add a left child and right child to a single root node', () => {
    //     const tree2 = new BinaryTree()
    //     tree2.insert(13)
    //     tree2.insert(4)
    //     tree2.insert(15)
    //     expect(tree2).toEqual({value: 13, left:4, right:15})
    //     // expect(tree.insert(15)).toEqual({value:13, left: 4, right:15})
    // })
})


describe ('Pre Order', () => {
    it('Can successfully return a collection from a preorder traversal', () => {
        expect(tree.preOrder()).toEqual([13, 5, 9, 7, 20])
    })
})

describe('In Order', () => {
    it('Can successfully return a collection from an inorder traversal', () => {
        expect(tree.inOrder()).toEqual([5, 7, 9, 13, 20])
    })
})

describe('Post Order', () => {
    it('Can successfully return a collection from a postorder traversal', () => {
        expect(tree.postOrder()).toEqual([7, 9, 5, 20, 13])
    })
})