const repeateWord = str => {

    if(str === (''))return null 

    let toSplit = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-+?@"<>_`~()]/g, '')
    let arr = toSplit.split(' ');

    const map = new Map()
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            return arr[i]
        } else {
        map.set(arr[i], i)
        } 
        if(i === arr.length-1) {
            return 'no repeated words'
        }
    } 
    
}

describe ('First repeated word', () => {
    it('Returns first repeated word', () => {
        let str = 'The first word this will return will be the word will'
        expect(repeateWord(str)).toEqual('will')
    })

    it('Does not return a word if no repeated words ', () => {
        let str = 'There are no repeated words here.'
        expect(repeateWord(str)).toEqual('no repeated words')
    })
    it('Will return first repeated word even when there are special characters in string', () => {
        let str = 'will return? return this word even though special characters'
        expect(repeateWord(str)).toEqual('return')
    })
    it('will return null if an empty string', () => {
        let str = ''
        expect(repeateWord(str)).toEqual(null)
    })
})