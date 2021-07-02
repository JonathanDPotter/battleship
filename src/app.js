import "./app.scss";
import Board from "./components/board/Board.js";
import Ship from "./components/ship/Ship.js";

const humBoard = new Board("human");
const battleship = new Ship("battleship", 4, "b");
const submarine = new Ship("submarine", 3, "s");
const cruiser = new Ship("cruiser", 3, "c");
const destroyer = new Ship("destroyer", 2, "d");
const aircraftCarrier = new Ship("aircraft carrier", 5, "a");

export const fire = (board, y, x) => {
  let pointHit = false;

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
          break;
        case "b":
          battleship.hit(shipPoint);
          break;
        case "c":
          cruiser.hit(shipPoint);
          break;
        case "d":
          destroyer.hit(shipPoint);
          break;
        case "s":
          submarine.hit(shipPoint);
          break;
        default:
          console.log("Some kind of error.");
          break;
      }
    }
    return true;
  }
};

humBoard.place(0, 0, "h", destroyer);
humBoard.place(2, 2, "h", battleship);
humBoard.place(3, 2, "v", submarine);
fire(humBoard, 0, 0);
fire(humBoard, 0, 1);

const body = document.getElementById("body");
const title = document.createElement("h1");
title.textContent = "Battleship";
body.appendChild(title);
const player = document.createElement("h1");
player.textContent = humBoard.player;
body.appendChild(player);
const points = document.createElement("div");
points.id = "points";
humBoard.points.forEach((line) => {
  line.forEach((point) => {
    const newPoint = document.createElement("div");
    newPoint.className = "point";
    newPoint.dataset.status = point;
    const label = document.createElement("p");
    label.textContent = newPoint.dataset.status;
    newPoint.appendChild(label);
    points.appendChild(newPoint);
  });
});
body.appendChild(points);
