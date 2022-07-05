const fs = require('fs');
const { MoveRover } = require('../../usecase/MoveRover');

try {
  const input = fs.readFileSync(process.argv[2], 'utf8');
  const moveRover = new MoveRover(input);
  console.log(moveRover.execute());
} catch (err) {
  console.log('There was an error trying to load your file.', err);
}

