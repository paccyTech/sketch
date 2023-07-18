const mainContainer = document.querySelector("#main-container");

function getRandomColour() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

let choice = "bw";

const blackAndWhite = document.querySelector("#btn-bw");
blackAndWhite.addEventListener("click", () => (choice = "bw"));
const randomColor = document.querySelector("#btn-rand");
randomColor.addEventListener("click", () => (choice = "rand"));
const greyScale = document.querySelector("#btn-grey");
greyScale.addEventListener("click", () => (choice = "grey"));

function setFillingStyle(element) {
  let colors = [
    `rgb(255, 255, 255)`,
    `rgb(240, 240, 240)`,
    `rgb(210, 210, 210)`,
    `rgb(180, 180, 180)`,
    `rgb(150, 150, 150)`,
    `rgb(120, 120, 120)`,
    `rgb(90, 90, 90)`,
    `rgb(60, 60, 60)`,
    `rgb(30, 30, 30)`,
    `rgb(0, 0, 0)`,
  ];
  let index = colors.indexOf(element.style.backgroundColor);

  if (choice == "bw") {
    element.style.backgroundColor = "#000000";
  } else if (choice == "rand") {
    element.style.backgroundColor = getRandomColour();
  } else {
    if (index == -1) {
      element.style.backgroundColor = colors[0];
      element.value = index++;
    } else {
      element.style.backgroundColor = colors[index + 1];
      element.value = index++;
    }
  }
}

function fillTheGrid(number = 16) {
  mainContainer.innerHTML = "";
  mainContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr);
      grid-template-rows: repeat(${number}, 1fr);`;
  let numSquare = number * number;
  for (let i = 0; i < numSquare; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white";
    newDiv.value = 0;
    newDiv.addEventListener("mouseleave", () => setFillingStyle(newDiv));
    mainContainer.appendChild(newDiv);
  }
}

fillTheGrid();

const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", () => {
  let newSize = "";
  do {
    newSize = prompt("Enter new size between 1 and 100", "");
  } while (+newSize < 1 || newSize > 100);
  fillTheGrid(newSize);
});