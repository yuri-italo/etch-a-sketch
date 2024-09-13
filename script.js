const DEFAULT_SIZE = 16;

createGrid(DEFAULT_SIZE);

const resizeButton = document.querySelector(".resize-button");
resizeButton.addEventListener("click", () => {
  let input = null;
  do {
    input = window.prompt("Number of squares per side [1 - 100]");
    if (input === null) {
      input = DEFAULT_SIZE;
    }
  } while (input < 1 || input > 100 || isNaN(input));

  createGrid(input);
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  document.querySelector(".container").childNodes.forEach((square) => {
    square.style.backgroundColor = "inherit";
  });
});

function createGrid(sideSize) {
  const GRID_HEIGHT = 500;
  const GRID_WIDTH = 500;

  const container = document.querySelector(".container");
  container.innerHTML = "";

  const divQuantity = sideSize * sideSize;
  for (let i = 0; i < divQuantity; i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.width = GRID_WIDTH / sideSize + "px";
    div.style.height = GRID_HEIGHT / sideSize + "px";
    container.appendChild(div);
  }

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mousemove", handleMouseEnter);
    square.addEventListener("click", handleClick);
  });
}

function handleMouseEnter(event) {
  const target = event.target;
  if (event.buttons === 1) {
    target.style.backgroundColor = "black";
  }
}

function handleClick(event) {
  event.target.style.backgroundColor = "black";
}
