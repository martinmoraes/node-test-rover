const { InputParser } = require('../service/InputParser');
const { Rover, N, S, E, W } = require('../entity/Rover');

const DIRECTION = {
  N: N,
  S: S,
  E: E,
  W: W,
};

class MoveRover {
  constructor(input) {
    this.input = input;
  }

  execute() {
    const parsedInput = InputParser.parse(this.input);
    const rovers = [];
    for (const [roverParams, instructions] of parsedInput) {
      const rover = new Rover(
        roverParams[0],
        roverParams[1],
        DIRECTION[roverParams[2]],
        roverParams[3],
        roverParams[4],
        rovers
      );
      rovers.push(rover);

      for (const instruction of instructions) {
        switch (instruction) {
          case 'L':
            rover.rotateLeft();
            break;
          case 'R':
            rover.rotateRight();
            break;
          case 'M':
            rover.move();
            break;
        }
      }
    }
    return this.#getOutput(rovers);
  }

  #getOutput(rovers) {
    return rovers.map((rover) => `${rover.x} ${rover.y} ${rover.getHeading()}`).join('\n');
  }
}

module.exports = { MoveRover };

