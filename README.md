# data-structures-and-algorithms
Author: Cait Rowland

## Table of Contents
* [Reverse-Array] (../code-challenges/arrayReverse/arrayReverse.js);
* [Shift Array] (../code-challenges/arrayShift/arrayShift.js);

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
