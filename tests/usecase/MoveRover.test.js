const {MoveRover} = require('../../src/usecase/MoveRover')

describe('MoveRover', ()=>{

    it('should return rovers in the right position', () => {
        const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`
        const moveRover = new MoveRover(input)
        const output = moveRover.execute()
        const expected = `1 3 N
5 1 E`
        expect(expected).toEqual(output)
    });
})