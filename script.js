const container = document.querySelector(".container");
const divQuantity = 16 * 16;

for (let i = 0; i < divQuantity; i++) {
  const div = document.createElement("div");
  div.className = "square";
  container.appendChild(div);
}