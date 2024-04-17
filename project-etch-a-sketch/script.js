const mainContainer = document.querySelector("#container");

let mouseDown = false;

let activatedGridArr = [
  [0, 0],
  [0, 0],
];
let activatedGridArrIdx = 0;
let ACTIVATED_GRID_ARR_SIZE = 2;

let colour = "black";

const onMouseDown = () => {
  mouseDown = true;
};

const onMouseUp = () => {
  mouseDown = false;
  activatedGridArr = [
    [0, 0],
    [0, 0],
  ];
  activatedGridArrIdx = 0;
};

mainContainer.addEventListener("mousedown", onMouseDown);
mainContainer.addEventListener("mouseup", onMouseUp);

const connectGrids = (activatedGridArr) => {
  for (let i = 0; i < ACTIVATED_GRID_ARR_SIZE - 1; i++) {
    let firstPoint_X = activatedGridArr[i][0];
    let firstPoint_Y = activatedGridArr[i][1];
    let secondPoint_X = activatedGridArr[i + 1][0];
    let secondPoint_Y = activatedGridArr[i + 1][1];

    while (firstPoint_X < secondPoint_X && firstPoint_Y < secondPoint_Y) {
      firstPoint_X++;
      firstPoint_Y++;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_X < secondPoint_X && firstPoint_Y > secondPoint_Y) {
      firstPoint_X++;
      firstPoint_Y--;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_X > secondPoint_X && firstPoint_Y < secondPoint_Y) {
      firstPoint_X--;
      firstPoint_Y++;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_X > secondPoint_X && firstPoint_Y > secondPoint_Y) {
      firstPoint_X--;
      firstPoint_Y--;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_X < secondPoint_X) {
      firstPoint_X++;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_X > secondPoint_X) {
      firstPoint_X--;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_Y > secondPoint_Y) {
      firstPoint_Y--;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }

    while (firstPoint_Y < secondPoint_Y) {
      firstPoint_Y++;
      let connectingGrid = `[${firstPoint_X}, ${firstPoint_Y}]`;
      let connectingGridNode = document.querySelector(
        `[data-coordinates="${connectingGrid}"]`
      );
      connectingGridNode.style.background = colour;
    }
  }
};

const onHover = (event) => {
  if (mouseDown) {
    activatedGridArr[activatedGridArrIdx % ACTIVATED_GRID_ARR_SIZE] =
      JSON.parse(event.target.dataset.coordinates);
    if (activatedGridArrIdx >= 1) connectGrids(activatedGridArr);
    event.target.style.background = colour;
    activatedGridArrIdx++;
  }
};

const etchASketch = (numGrid) => {
  // clear the grids
  while (mainContainer.firstChild)
    mainContainer.removeChild(mainContainer.firstChild);
  colour = "black";

  for (let i = 0; i < numGrid * numGrid; i++) {
    let div = document.createElement("div");

    // add identifier classes
    div.classList.add("div");
    div.dataset.coordinates = `[${i % numGrid}, ${Math.floor(i / numGrid)}]`;

    div.style.width = `${100 / numGrid}%`;
    div.style.paddingBottom = `${100 / numGrid}%`;
    div.addEventListener("mousemove", onHover);

    mainContainer.appendChild(div);
  }
};

etchASketch(128);

/* button functions */
const newBtn = document.querySelector("#new");
const resetBtn = document.querySelector("#reset");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");
const blackBtn = document.querySelector("#black");
const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");

newBtn.addEventListener("click", () => {
  let numGrid = 0;
  while (numGrid < 16 || numGrid > 256) {
    numGrid = Number(prompt("Enter a value (16-256): "));
  }
  etchASketch(numGrid);
});

resetBtn.addEventListener("click", () => {
  const gridList = document.querySelectorAll(".div");
  gridList.forEach((grid) => {
    grid.style.background = "white";
  });
});

eraserBtn.addEventListener("click", () => {
  colour = "white";
});

blackBtn.addEventListener("click", () => {
  colour = "black";
});

blueBtn.addEventListener("click", () => {
  colour = "blue";
});

redBtn.addEventListener("click", () => {
  colour = "red";
});

greenBtn.addEventListener("click", () => {
  colour = "green";
});
