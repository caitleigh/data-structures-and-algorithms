let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function BinarySearch(arr, val) {
    let counter = 0;

    let mid = Math.ceil(arr.length/2)

    if (arr[mid] === val) {
      return mid;
    }
      if (arr[mid] < val) {
      counter ++;
      }
      if (arr[mid] > val) {
        counter --;
      } 

      while(arr[mid] !== val && mid > 0 && mid < arr.length) {
        mid += counter
        if(arr[mid] === val) {
          return mid;
        }
      }
      return -1;
    }



BinarySearch(arr, 9);
BinarySearch(arr, 8);
BinarySearch(arr, 2);