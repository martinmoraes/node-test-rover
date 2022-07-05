const { MoveRover } = require('../../src/usecase/MoveRover');

describe('MoveRover', () => {
  it('should return rovers in the right position without collision', () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
    const moveRover = new MoveRover(input);
    const output = moveRover.execute();
    const expected = `1 3 N
5 1 E`;
    expect(expected).toEqual(output);
  });

  it('should return rovers in the right position with collision', () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
RRMMMM`;
    const moveRover = new MoveRover(input);
    const output = moveRover.execute();
    const expected = `1 3 N
2 3 W`;
    expect(expected).toEqual(output);
  });
});

