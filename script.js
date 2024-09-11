const container = document.querySelector(".container");

createGrid(16);

const squares = document.querySelectorAll(".square");
Array.from(squares).forEach((square) => {
  square.addEventListener("mouseenter", handleMouseEnter);
});

function createGrid(sideSize) {
  const divQuantity = sideSize * sideSize;
  for (let i = 0; i < divQuantity; i++) {
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
  }
}

function handleMouseEnter(event) {
  const target = event.target;
  target.style.backgroundColor = "black";
}
