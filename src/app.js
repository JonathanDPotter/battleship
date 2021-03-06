import "./app.scss";
import Board from "./components/board/Board.js";
import Ship from "./components/ship/Ship.js";
import displayBoard from "./components/displayBoard";

const humBoard = new Board("human");
const comBoard = new Board("computer");
const humBoardContainer = document.getElementById("humBoard-container");
const comBoardContainer = document.getElementById("comBoard-container");
const informationDisplay = document.getElementById("information");
const toggleButton = document.getElementById("orientation-toggle");

const [battleship, submarine, cruiser, destroyer, aircraftCarrier] = [
  new Ship("battleship", 4, "b"),
  new Ship("submarine", 3, "s"),
  new Ship("cruiser", 3, "c"),
  new Ship("destroyer", 2, "d"),
  new Ship("aircraft carrier", 5, "a"),
];

const shipArray = [
  aircraftCarrier,
  battleship,
  submarine,
  cruiser,
  destroyer,
  { name: "" },
];

const [comAc, comDes, comCruise, comSub, comBatt] = [
  new Ship("comAc", 5, "a"),
  new Ship("comDes", 2, "d"),
  new Ship("comCruise", 3, "c"),
  new Ship("comSub", 3, "s"),
  new Ship("comBatt", 4, "b"),
];

const comShipArray = [comAc, comDes, comCruise, comSub, comBatt];
let placementCounter = 0,
  humShipsSunk = 0,
  comShipsSunk = 0;

const tallySunkShip = (player) => {
  player === "computer" ? comShipsSunk++ : humShipsSunk++;
};

const fire = (board, y, x) => {
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
          if (aircraftCarrier.isSunk()) {
            console.log("Aircraft Carrier sunk!");
            tallySunkShip(board.player);
          }
          break;
        case "b":
          battleship.hit(shipPoint);
          if (battleship.isSunk()) {
            console.log("Battleship sunk!");
            tallySunkShip(board.player);
          }
          break;
        case "c":
          cruiser.hit(shipPoint);
          if (cruiser.isSunk()) {
            console.log("Cruiser sunk!");
            tallySunkShip(board.player);
          }
          break;
        case "d":
          destroyer.hit(shipPoint);
          if (destroyer.isSunk()) {
            console.log("Destroyer sunk!");
            tallySunkShip(board.player);
          }
          break;
        case "s":
          submarine.hit(shipPoint);
          if (submarine.isSunk()) {
            console.log("Submarine sunk!");
            tallySunkShip(board.player);
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

const setupGame = () => {
  comShipArray.forEach((ship) => {
    let placed = true;
    let counter = 0;
    do {
      placed = comBoard.place(
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8),
        Math.random() < 0.5 ? "h" : "v",
        ship
      );
    } while (placed === false);
  });

  toggleButton.addEventListener("click", () => {
    toggleButton.dataset.orientation === "h"
      ? (toggleButton.dataset.orientation = "v")
      : (toggleButton.dataset.orientation = "h");
  });

  displayBoard(humBoard);

  informationDisplay.textContent = `Place ${shipArray[placementCounter].name}`;
  humBoardContainer.addEventListener("click", () => {
    if (placementCounter === 5) {
      informationDisplay.style.display = "none";
      toggleButton.style.display = "none";
      humBoardContainer.style.pointerEvents = "none";
      displayBoard(comBoard);
      turn();
    } else {
      informationDisplay.textContent = `Place ${shipArray[placementCounter].name}`;
    }
    humBoardContainer.removeChild(humBoardContainer.firstChild);
    displayBoard(humBoard);
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
    if (comShipsSunk === 5 || humShipsSunk === 5) {
      let winner = "";
      comShipsSunk === 5 ? (winner = "Human") : (winner = "Computer");
      console.log(`${winner} has won.`);
    } else {
      turn();
    }
  });
};

setupGame();

export {
  humBoardContainer,
  comBoardContainer,
  humBoard,
  comBoard,
  toggleButton,
  shipArray,
  placementCounter,
  fire,
};
