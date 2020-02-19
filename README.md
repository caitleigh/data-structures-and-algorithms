# data-structures-and-algorithms
Author: Cait Rowland

## Table of Contents
* [Reverse-Array](./code-challenges/arrayReverse/arrayReverse.js);
* [Shift Array](./code-challenges/arrayShift.js);
* [Array Binary Search](./code-challengs/arrayBinarySearch/array-binary-search.js)
* [Linked Lists](./code-challenges/linkedList/linked-list.test.js)
* [Linked List 2](./code-challenges/linkedList/linked-list.test.js)

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

# Linked LIst 
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


