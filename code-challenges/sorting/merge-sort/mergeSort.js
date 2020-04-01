const mergeSort = arr => {
    let n = arr.length

    if(n>1) {
        let mid = n/2
        let left = arr.slice(0,mid);
        let right = arr.slice(mid, n);

        mergesort(left)
        mergesort(right)
        mergesort(left, right, arr)
    }
}