import "./app.scss";
import Board from "./components/board/Board.js";
import Ship from "./components/ship/Ship.js";

const humBoard = new Board("human");
const comBoard = new Board("computer");
const humBoardContainer = document.getElementById("humBoard-container");
const comBoardContainer = document.getElementById("comBoard-container");
const informationDisplay = document.getElementById("information");
const toggleButton = document.getElementById("orientation-toggle");
const battleship = new Ship("battleship", 4, "b");
const submarine = new Ship("submarine", 3, "s");
const cruiser = new Ship("cruiser", 3, "c");
const destroyer = new Ship("destroyer", 2, "d");
const aircraftCarrier = new Ship("aircraft carrier", 5, "a");
let placementCounter = 0;
const shipArray = [
  aircraftCarrier,
  battleship,
  submarine,
  cruiser,
  destroyer,
  { name: "" },
];

const fire = (board, y, x) => {
  let pointHit = false;

  console.log(board.player, y, x);

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
  const playerPoints = document.createElement("div");
  playerPoints.className = "points";
  playerPoints.id = board.player;

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
        : newPoint.addEventListener("click", () => {
            humBoard.place(
              newPoint.dataset.coord[0],
              newPoint.dataset.coord[1],
              toggleButton.dataset.orientation,
              shipArray[placementCounter]
            );
          });
      playerPoints.appendChild(newPoint);
    });
  });
  board.player === "computer"
    ? comBoardContainer.appendChild(playerPoints)
    : humBoardContainer.appendChild(playerPoints);
};

const setupGame = () => {
  displayBoard(humBoard);

  informationDisplay.textContent = `Place ${shipArray[placementCounter].name}`;
  humBoardContainer.addEventListener("click", () => {
    placementCounter < 5 ? placementCounter++ : null;
    if (placementCounter === 5) {
      informationDisplay.style.display = "none";
      toggleButton.style.display = "none";
      humBoardContainer.style.pointerEvents = "none";
    } else {
      informationDisplay.textContent = `Place ${shipArray[placementCounter].name}`;
    }
  });
};

const turn = () => {
  const comBoardDisplay = document.getElementById("computer");
  comBoardDisplay.addEventListener("click", () => {
    comBoardContainer.removeChild(comBoardContainer.firstChild);
    displayBoard(comBoard);
    fire(
      humBoard,
      Math.floor(Math.random() * 8),
      Math.floor(Math.random() * 8)
    );
    humBoardContainer.removeChild(humBoardContainer.firstChild);
    displayBoard(humBoard);
  });
};

setupGame();
