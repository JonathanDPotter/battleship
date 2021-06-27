const Ship = require("./Ship.js");

test("new ship has correct name and points", () => {
  const battleship = new Ship("battleship", 4);
  expect(battleship.name).toBe("battleship");
  expect(battleship.points).toStrictEqual([0, 0, 0, 0]);
});

test("battleship.hit marks the correct point as hit", () => {
  const battleship = new Ship("battleship", 4);
  battleship.hit(2);
  expect(battleship.points).toStrictEqual([0, 0, 1, 0]);
});
