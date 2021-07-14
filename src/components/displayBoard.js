import {
  comBoardContainer,
  humBoardContainer,
  humBoard,
  comBoard,
  toggleButton,
  shipArray,
  placementCounter,
  fire,
} from "../app.js";

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
            console.log(newPoint.dataset.coord);
            if (
              humBoard.place(
                parseInt(newPoint.dataset.coord[0]),
                parseInt(newPoint.dataset.coord[2]),
                toggleButton.dataset.orientation,
                shipArray[placementCounter]
              )
            ) {
              placementCounter < 5 ? placementCounter++ : null;
            }
          });
      playerPoints.appendChild(newPoint);
    });
  });
  board.player === "computer"
    ? comBoardContainer.appendChild(playerPoints)
    : humBoardContainer.appendChild(playerPoints);
};

export default displayBoard;
