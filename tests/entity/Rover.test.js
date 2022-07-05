const { Rover, E, S, W, N } = require('../../src/entity/Rover');

describe('Rover', () => {
  it('should rotate left', () => {
    const rover = new Rover(5, 5, E, 10, 10);
    rover.rotateLeft();
    expect(rover.getHeading()).toEqual('N');
  });

  it('should rotate right', () => {
    const rover = new Rover(5, 5, E, 10, 10);
    rover.rotateRight();
    expect(rover.getHeading()).toEqual('S');
  });

  describe('move north', () => {
    it('should move north', () => {
      const rover = new Rover(5, 5, N, 10, 10);
      rover.move();
      expect(rover.x).toEqual(5);
      expect(rover.y).toEqual(6);
    });

    it('should not move north out of pad', () => {
      const rover = new Rover(5, 10, N, 10, 10);
      rover.move();
      expect(rover.x).toEqual(5);
      expect(rover.y).toEqual(10);
    });
  });

  describe('move west', () => {
    it('should move west', () => {
      const rover = new Rover(5, 5, W, 10, 10);
      rover.move();
      expect(rover.x).toEqual(4);
      expect(rover.y).toEqual(5);
    });

    it('should not move west out of pad', () => {
      const rover = new Rover(0, 5, W, 10, 10);
      rover.move();
      expect(rover.x).toEqual(0);
      expect(rover.y).toEqual(5);
    });
  });

  describe('move south', () => {
    it('should move south', () => {
      const rover = new Rover(5, 5, S, 10, 10);
      rover.move();
      expect(rover.x).toEqual(5);
      expect(rover.y).toEqual(4);
    });

    it('should not move south out of pad', () => {
      const rover = new Rover(5, 0, S, 10, 10);
      rover.move();
      expect(rover.x).toEqual(5);
      expect(rover.y).toEqual(0);
    });
  });

  describe('move east', () => {
    it('should move east', () => {
      const rover = new Rover(5, 5, E, 10, 10);
      rover.move();
      expect(rover.x).toEqual(6);
      expect(rover.y).toEqual(5);
    });

    it('should not move east out of pad', () => {
      const rover = new Rover(10, 5, E, 10, 10);
      rover.move();
      expect(rover.x).toEqual(10);
      expect(rover.y).toEqual(5);
    });
  });
});
