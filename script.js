createGrid(16);

const resizeButton = document.querySelector(".nav-bar button");
resizeButton.addEventListener("click", () => {
  const input = window.prompt("Number of squares per side [1 - 100]");
});

function createGrid(sideSize) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const divQuantity = sideSize * sideSize;
  for (let i = 0; i < divQuantity; i++) {
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
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
