class Ship {
  constructor(name, length) {
    this.name = name;
    this.points = new Array(length).fill(0);
    this.hit = (point) => {
      this.points[point] = 1;
    };
    this.isSunk = () => {
      if (this.points.every((point) => point === 1)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = Ship;