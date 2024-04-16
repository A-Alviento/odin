const mainContainer = document.querySelector("#container");

let mouseDown = false;

const onMouseDown = () => {
  mouseDown = true;
};

const onMouseUp = () => {
  mouseDown = false;
};

mainContainer.addEventListener("mousedown", onMouseDown);
mainContainer.addEventListener("mouseup", onMouseUp);

const onHover = (event) => {
  if (mouseDown) event.target.style.background = "black";
};

for (let i = 0; i < 128 * 128; i++) {
  let div = document.createElement("div");
  div.className = "div";
  div.addEventListener("mousemove", onHover);

  mainContainer.appendChild(div);
}

console.log(window.innerWidth);
