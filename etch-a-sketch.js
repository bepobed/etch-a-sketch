const body = document.querySelector("body");
const gridButton = document.getElementById("gridButton");

//create a box for the grid
const box = document.createElement("div");
box.classList.add("box");
body.appendChild(box);

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
      subDiv.textContent = j + 1;
    }
  }
}
createGrid();

//prompts user a grid size
function promptGrid() {
  let gridSize = Number(
    prompt("Which size do you prefer? Enter a value between 10 to 100")
  );
  while (gridSize < 10 || gridSize > 100 || !Number.isInteger(gridSize)) {}
  gridSize = Number(prompt("Please enter a valid size: 10-100"));
}

gridButton.addEventListener("click", () => {
  promptGrid();
});

//selector after creater grid
//have to call the function before, otherwise nodeList is empty
const subDiv = document.querySelectorAll(".subDiv");

subDiv.forEach((subDiv) => {
  subDiv.addEventListener("mouseover", () => {
    subDiv.style.backgroundColor = "antiquewhite";
  });

  subDiv.addEventListener("mouseout", () => {
    subDiv.style.backgroundColor = ""; // clears inline style
  });
});
