import "./app.scss";
import Board from "./components/board/Board.js";
import Ship from "./components/ship/Ship.js";

const humBoard = new Board("human");
const comBoard = new Board("computer");
const battleship = new Ship("battleship", 4, "b");
const submarine = new Ship("submarine", 3, "s");
const cruiser = new Ship("cruiser", 3, "c");
const destroyer = new Ship("destroyer", 2, "d");
const aircraftCarrier = new Ship("aircraft carrier", 5, "a");

const fire = (board, y, x) => {
  let pointHit = false;

  console.log(y, x);

  if (board.points[y][x] === 1) {
    return false;
  } else {
    pointHit = board.target(y, x);
    if (pointHit !== 0) {
      let shipId = pointHit.split("")[0];
      let shipPoint = pointHit.split("")[1];
      console.log(shipId, shipPoint);
      switch (shipId) {
        case "a":
          aircraftCarrier.hit(shipPoint);
          if (aircraftCarrier.isSunk()) {
            console.log("Aircraft Carrier sunk!");
          }
          break;
        case "b":
          battleship.hit(shipPoint);
          if (battleship.isSunk()) {
            console.log("Battleship sunk!");
          }
          break;
        case "c":
          cruiser.hit(shipPoint);
          if (cruiser.isSunk()) {
            console.log("Cruiser sunk!");
          }
          break;
        case "d":
          destroyer.hit(shipPoint);
          if (destroyer.isSunk()) {
            console.log("Destroyer sunk!");
          }
          break;
        case "s":
          submarine.hit(shipPoint);
          if (submarine.isSunk()) {
            console.log("Submarine sunk!");
          }
          break;
        default:
          console.log("Some kind of error.");
          break;
      }
    }
    return true;
  }
};

const displayBoard = (board) => {
  const playerName = document.createElement("h1");
  playerName.textContent = board.player;
  body.appendChild(playerName);
  const playerPoints = document.createElement("div");
  playerPoints.className = "points";

  board.points.forEach((line, i) => {
    line.forEach((point, j) => {
      const newPoint = document.createElement("div");
      newPoint.className = "point";
      newPoint.dataset.status = point;
      newPoint.dataset.coord = [i, j];
      const label = document.createElement("p");
      label.textContent = newPoint.dataset.status;
      newPoint.appendChild(label);
      board.player === "computer"
        ? newPoint.addEventListener("click", () =>
            fire(board, newPoint.dataset.coord[0], newPoint.dataset.coord[2])
          )
        : null;
      playerPoints.appendChild(newPoint);
    });
  });
  body.appendChild(playerPoints);
};

humBoard.place(0, 0, "h", destroyer);
humBoard.place(2, 2, "h", battleship);
humBoard.place(3, 2, "v", submarine);
humBoard.place(7, 0, "h", aircraftCarrier);
console.log(humBoard.place(0, 7, "v", cruiser))

const body = document.getElementById("body");
const title = document.createElement("h1");
title.textContent = "Battleship";
body.appendChild(title);

displayBoard(comBoard);
displayBoard(humBoard);
