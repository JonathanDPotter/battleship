class Board {
  constructor(player) {
    this.player = player;
    
    this.points = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.target = (y, x) => {
      if (this.points[y][x] === 0) {
        this.points[y][x] = 1;
        return true;
      } else {
        return false;
      }
    };

    this.place = (y, x, orient, ship) => {
      const { length } = ship.points;
      if (orient === "h") {
        if (x + length >= this.points[y].length) {
          return false;
        } else {
          for (let i = 0; i < length; i++) {
            this.points[y][x + i] = ship.id + i.toString();
          }
          return true;
        }
      } else {
        if (x + length >= this.points[y].length) {
          return false;
        } else {
          for (let i = 0; i < length; i++) {
            this.points[y + i][x] = ship.id + i.toString();
          }
          return true;
        }
      }
    };
  }
}

module.exports = Board;
