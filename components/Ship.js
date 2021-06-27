class Ship {
  constructor(name, length) {
    this.name = name;
    this.points = new Array(length).fill(0);
  }
}

module.exports = Ship;