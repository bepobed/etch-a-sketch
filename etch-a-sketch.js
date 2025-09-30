//selectors
const container = document.querySelector("body");

//create a box for the grid
const box = document.createElement("div");
box.classList.add("box");
container.appendChild(box);

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    box.appendChild(div);
    for (let i = 0; i < 16; i++) {
      const subDiv = document.createElement("div");
      subDiv.classList.add("subDiv");
      div.appendChild(subDiv);
      subDiv.textContent = i + 1;
    }
  }
}

createGrid();
