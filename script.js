const container = document.querySelector(".container");
const divQuantity = 16 * 16;

for (let i = 0; i < divQuantity; i++) {
  const div = document.createElement("div");
  div.className = "square";
  container.appendChild(div);
}

const squares = document.querySelectorAll(".square");
Array.from(squares).forEach((square) => {
  square.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(event) {
  const target = event.target;
  target.style.backgroundColor = "black";
}
