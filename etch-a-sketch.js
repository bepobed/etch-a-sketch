const body = document.querySelector("body");
const gridButton = document.getElementById("gridButton");

//create a box for the grid
const box = document.createElement("div");
box.classList.add("box");
body.appendChild(box);

//creates default grid 16x16
function createGrid() {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("div"); //used for display flex
    box.appendChild(div);
    for (let j = 0; j < 16; j++) {
      //second loop to create 16 div per row
      const subDiv = document.createElement("div");
      subDiv.classList.add("subDiv");
      div.appendChild(subDiv);
    }
  }
}
createGrid();
addCellColor();

//prompts user a grid size
function promptGrid() {
  let gridSize = Number(
    prompt("Which size do you prefer? Enter a value between 10 to 100")
  );
  while (gridSize < 10 || gridSize > 100 || !Number.isInteger(gridSize)) {
    gridSize = Number(prompt("Please enter a valid size: 10-100"));
    //issue when user cancels prompt, doesn't exit loop
  }
  return gridSize;
}

//runs when user clicks on gridButton
function customGrid() {
  let userChoice = promptGrid();
  box.replaceChildren(); //clears the box
  for (let i = 0; i < userChoice; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    box.appendChild(div);
    for (let j = 0; j < userChoice; j++) {
      const subDiv = document.createElement("div");
      subDiv.classList.add("subDiv");
      div.appendChild(subDiv);
    }
  }
  const subDiv = document.querySelectorAll(".subDiv");
  addCellColor();
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//on hover:: changes color of subDiv
function addCellColor() {
  const subDiv = document.querySelectorAll(".subDiv");
  subDiv.forEach(
    (subDiv) => {
      subDiv.addEventListener("mouseover", () => {
        if (subDiv.style.backgroundColor) return;
        subDiv.style.backgroundColor = randomColor();
      });
    }

    // subDiv.addEventListener("mouseout", () => {
    //   subDiv.style.backgroundColor = ""; // clears inline style
    // });
  );
}

gridButton.addEventListener("click", () => {
  customGrid();
});
