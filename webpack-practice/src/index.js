import _ from "lodash";
import "./style.css";
import printMe from "./print";

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());
