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

const gridButton = document.querySelector(".grid-button");
gridButton.addEventListener("click", () => {
  document.querySelector(".container").childNodes.forEach((square) => {
    square.classList.toggle("non-border");
  });
});

const rgbButton = document.querySelector(".rgb-button");
rgbButton.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("rgb");
});

function createGrid(sideSize) {
  const container = document.querySelector(".container");
  const squareSize = (1 / sideSize) * 100 + "%";
  container.innerHTML = "";

  for (let i = 0; i < sideSize * sideSize; i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.width = squareSize;
    div.style.height = squareSize;
    container.appendChild(div);
  }

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mousemove", handleMouseMove);
    square.addEventListener("click", handleClick);
  });
}

function handleMouseMove(event) {
  const target = event.target;
  const container = document.querySelector(".container");

  if (event.buttons === 1) {
    if (container.classList.contains("rgb")) {
      generateRandomColor(target);
    } else {
      target.style.backgroundColor = "black";
    }
  }
}

function handleClick(event) {
  const target = event.target;
  const container = document.querySelector(".container");

  if (container.classList.contains("rgb")) {
    generateRandomColor(target);
  } else {
    target.style.backgroundColor = "black";
  }
}

function generateRandomColor(target) {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  target.style.backgroundColor = `rgb(${R},${G},${B})`;
}
