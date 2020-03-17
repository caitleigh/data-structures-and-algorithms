insertionSort = require('./insertionSort')

describe('Insertion Sort', () => {

    it('Succesfully returns a sorted array', () => {
        arr = [8, 4, 23, 42, 16, 15]
        expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42])
    })
})