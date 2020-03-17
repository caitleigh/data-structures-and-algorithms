# data-structures-and-algorithms
Author: Cait Rowland

## Table of Contents

* [Reverse-Array](#Reverse-an-array);
* [Shift Array](#shift-array);
* [Array Binary Search](#Array-Binary-Search)
* [Linked Lists](#Linked-List )
* [Linked List 2](#Linked-List-2)
* [Linked List - kthFromTheEnd](#kthFromTheEnd)
* [Implementation: Stacks and Queues](#Stacks-And-Queues-Implementation)
* [Queue with Stacks](#Queue-with-Stacks)
* [Binary Tree](#Trees)
* [BreadthFirst](#Breadth-First)
* [Find Max Value](#Find-Max-Value)
* [Insertion Sort](#Insertion-Sort)


# Reverse an Array
Code challenge to reverse array 

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
Create a function that starts at the end of the array and loops through to the beginning, pushing each value to a new array. This seemed like the simplest and most efficient way to complete the challenge without too many steps and repetition. 

## Solution
![401-code-challenge-1-whiteboard-1](./assets/reverseArr1.HEIC);
![401-code-challenge-1-whiteboard-2](./assets/reverseArr2.HEIC);

# Shift Array
Code challenge to add value to the middle of an array

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
LGreat a function that looks at the length of the array and divids by 2 to find the middle index. Loop through the array and compare the index to the middle and pushes the value at the indext a new array. Once it reaches the index that matches the middle, push the new value and then push the value at that index, then continue to push the array value at the remaining indexs. This performs the function in order so that the new array that it produces will be in the correct order. 

## Solution
![401-code-challenge-2-whiteboard-1](./assets/arrayShift1.HEIC);
![401-code-challenge-2-whiteboard-2](./assets/arrayShift2.HEIC);
![401-code-challenge-2-whiteboard-3](./assets/arrayShift3.HEIC);

# Array Binary Search
Code challenge to return the index of an array's element that is equal to search key

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency


## Solution
![401-code-challenge-3-whiteboard-1](./assets/arrayBinarySearch1.HEIC);
![401-code-challenge-3-whiteboard-2](./assets/arrayBinarySearch2.HEIC);
[Code](./code-challengs/arrayBinarySearch/array-binary-search.js);

## Solution
![401-code-challenge-2-whiteboard-1](./assets/arrayShift1.HEIC);
![401-code-challenge-2-whiteboard-2](./assets/arrayShift2.HEIC);
![401-code-challenge-2-whiteboard-3](./assets/arrayShift3.HEIC);

# Linked List 
Code challenge to create, insert, search and display linked list

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Approach & Efficiency


## Solution
[Code](./code-challenges/linkedList/linked-list.test.js)

# Linked List 2
Code challenge to append, insertBefore, and insertAfter to linked list

## Challenge
.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency


## Solution
[Code](./code-challenges/linkedList/linked-list.test.js)

# kthFromTheEnd
Code challenge to find the kth from the end of the linked list

## Challenge
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

## Solution
[Code](./code-challenges/linkedList/linked-list.test.js)


# Stacks And Queues Implementation 
Code challenge to implement stack and queues methods with linked lists

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the queue is empty.
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your languages best practices for naming conventions.
You have access to the Node class and all the properties on the Linked List class.

## Approach & Efficiency
Worked one method add a time utilizing TDD. Stored the values of each node in an array to easily find the values of each node and manipulate the stacks and queues 


## Solution
[Code](./code-challenges/stacksAndQueues/stacks-and-queues.test.js)

## API 
Methods available 
### Stacks 
* Create a new Stack
* Push - adds a new node to the front of a Stack
* Pop - removes a node from the front of a Stack
* Peek - returns the front value without changing the Stack
* isEmpty - returns boolean based on if Stack is empty or not

### Queues 
* Creates a new Queue
* Enqueue - adds a new node to end of a Queue 
* Dequeue - removes a node from the front of the Queue
* Peek - returns the value at the front of Queue without changing the Queue 
* isEmpty - return a boolean based on if Queue is empty or not

# Queue with Stacks
Code challenge to implement stack and queues methods with linked lists

## Challenge
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

## Approach & Efficiency


## Solution
[Code](./code-challenges/queueWithStacks/queue-with-stacks.test.js)

## API 

# Trees
Code Challenge to great a binary tree and complete depth first traversals

## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
* Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

## Approach & Efficiency
To create a binary tree that takes in a value and as additional values are added, check to see if it is greater than or less than the parent node and insert to the left or the the right based on the value. 

Pre order pushes each node value into an array as you work your way down the tree starting on the left and then the right 

In order, pushes the node value into a storage array as you work your way down the left and then the right 

Post order, traverses all the way to the left and then pushes values on its way back up and then does the same thing for the right side 

## API
Methods vailable: 
* Node class for trees
* Binary Tree class
- Inserts new node
- preOrder traversal 
- inOrder traversal 
_ postOrder traversal 

# Breadth First
Code Challenge to great a binary tree and complete depth first traversals

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
Breadth first will need to go through each level before moving to the next level so initate 2 arrays, one to keep track of our 'todo' list to visit and one to keep track of what was actually visted. While there is something in the queue, the code will move on to check if there is a right child and a left child and push those values to th queue. Once it looks at the children then it will move on to take those values off of the queue and move them to visited until the whole tree as been traversed and nothing is left in the queue. Then it will return 

## Solution 
[Code](./code-challenges/tree/tree.js)

## API
**Built off of Tree code challenge and classes** 
Methods vailable: 
* Node class for trees
* Binary Tree class
- Inserts new node
- preOrder traversal 
- inOrder traversal 
_ postOrder traversal 
- breadthFirs traversal 

# Find Max Value
Code Challenge to find the maximum value in a Binary Tree

## Challenge
Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
traverse through tree checking if node value is greater than current output. If it is, replace current value. 

## Solution 
[Code](./code-challenges/tree/tree.js)

## API
**Built off of Tree code challenge and classes** 
Methods vailable: 
* Node class for trees
* Binary Tree class
- Inserts new node
- preOrder traversal 
- inOrder traversal 
_ postOrder traversal 
- breadthFirst traversal 
_ findMaxValue

# Insertion Sort
Code challenge to sort an array

## Challenge
Walk through pseudo code with test array and then produce working code and test 

## Approach & Efficiency
[Blog](./code-challenges/sorting/insertion-sort/insertionSortBlog.md)
## Solution 
[Code](./code-challenges/sorting/insertion-sort/insertionSort.js)
[Test](./code-challenges/sorting/insertion-sort/insertionSort.test.js)


