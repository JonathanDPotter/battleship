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
      let pointHit = 0;

      // check if targeted point has already been targeted
      if (this.points[y][x] === 1) {
        return false;
      } else {
        // check if a ship is hit and return point hit
        if (this.points[y][x] !== 0) {
          pointHit = this.points[y][x];
        }
        this.points[y][x] = 1;
        return pointHit;
      }
    };

    this.place = (y, x, orient, ship) => {
      const { length } = ship.points;
      const checkPoints = [];

      // checks if placement is horizontal
      if (orient === "h") {
        // checks if Ship will fit on Board
        if (x + length >= this.points[y].length) {
          return false;
        } else {
          for (let i = 0; i < length; i++) {
            checkPoints.push(this.points[y][x + i]);
          }
        }

        // checks if Ship will overlap another Ship
        if (!checkPoints.every((point) => point === 0)) {
          return false;
        } else {
          // get a view of the points to be covered by Ship
          for (let i = 0; i < length; i++) {
            this.points[y][x + i] = ship.id + i.toString();
          }
          return true;
        }
        
        // below is for vertical placement
      } else {
        // checks if Ship will fit on Board
        if (x + length >= this.points[y].length) {
          return false;
        } else {
          // get a view of the points to be covered by Ship
          for (let i = 0; i < length; i++) {
            checkPoints.push(this.points[y + i][x]);
          }
        }

        // checks if Ship will overlap another Ship
        if (!checkPoints.every((point) => point === 0)) {
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
