arr = [1, 2, 3, 5, 6, 7];

function insertShiftArray(arr, val) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let middle = Math.ceil(arr.length /2 );
    console.log(middle)

    if(i < middle) {
      newArr.push(arr[i]);
    } else if ( i === middle) {
      newArr.push(val);
      newArr.push(arr[i])
    } else if ( i > middle) {
      newArr.push(arr[i])
    }

  }

  return newArr;
}

insertShiftArray(arr, 4);