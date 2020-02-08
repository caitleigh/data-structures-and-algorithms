'use strict';

//Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >=0; i--) { 
    newArr.push(arr[i]);
  }
  return newArr;
}
