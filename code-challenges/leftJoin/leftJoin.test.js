const leftJoin = (hashMap1, hashMap2) => {
    let output = []
    for (let [key, value] of hashMap1) {
      if(hashMap2.has(key)) {
        output.push([key, value, hashMap2.get(key)])
      }
    else {output.push([key, value, null])}
    } 
    return output
}


//// tests 

describe('leftJoin', () => {
    it('Will return an array of arrays with the key and values of the left map and the value of the right map if the same key exists or null', () => {
        let hash1 = new Map ([
            ['fond', 'enamored'],
            ['wrath', 'anger'],
            ['diligent', 'employed'],
            ['outfit', 'garb'],
            ['guide', 'usher']
          ])
          let hash2 = new Map([
            ['fond', 'averse'],
            ['wrath', 'delight'],
            ['diligent', 'idle'],
            ['guide', 'follow'],
            ['flow', 'jam']
          ])

          expect(leftJoin(hash1, hash2)).toEqual([ [ 'fond', 'enamored', 'averse' ],
          [ 'wrath', 'anger', 'delight' ],
          [ 'diligent', 'employed', 'idle' ],
          [ 'outfit', 'garb', null ],
          [ 'guide', 'usher', 'follow' ] ])
    })

    it('Will return null on all map2 values in output if right map is empty', () => {

        let hash1 = new Map ([
            ['fond', 'enamored'],
            ['wrath', 'anger'],
            ['diligent', 'employed'],
            ['outfit', 'garb'],
            ['guide', 'usher']
          ])
          let hash2 = new Map([])

        expect(leftJoin(hash1, hash2)).toEqual([ [ 'fond', 'enamored', null ],
        [ 'wrath', 'anger', null ],
        [ 'diligent', 'employed', null ],
        [ 'outfit', 'garb', null ],
        [ 'guide', 'usher', null ] ])
    })
})

