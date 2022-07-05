const {InputParser} = require('../../src/service/InputParser')

describe('InputParser', ()=>{

    it('should return data structure to be consumed', () => {
        const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

        const parsed = InputParser.parse(input)
        const expected = [
            [
                [1, 2, 'N', 5, 5],
                ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
            ],
            [
                [3, 3, 'E', 5, 5],
                ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
            ]
        ]
        
        expect(parsed).toEqual(expect.arrayContaining(expected))
    });
})