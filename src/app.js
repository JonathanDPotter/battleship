import "./app.scss";
import Board from "./components/board/Board.js";
import Ship from "./components/ship/Ship.js";

const humBoard = new Board("human");
const battleship = new Ship("battleship", 4, "b");
const submarine = new Ship("submarine", 3, "s");

humBoard.target(2, 3);
humBoard.place(3, 3, "h", battleship);
humBoard.place(0, 0, "v", submarine);

const body = document.getElementById("body");
const title = document.createElement("h1");
title.textContent = "Battleship";
body.appendChild(title);
const player = document.createElement("h1");
player.textContent = humBoard.player;
body.appendChild(player);
const points = document.createElement("div");
humBoard.points.forEach((line) => {
  const newPoint = document.createElement("div");
  newPoint.textContent = line;
  points.appendChild(newPoint);
});
body.appendChild(points);


