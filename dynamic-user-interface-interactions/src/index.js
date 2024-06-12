import "./reset.css";
import "./style-dropdown.css";
import "./style-carousel.css";

import img1 from "./assets/sample/img-1.png";
import img2 from "./assets/sample/img-2.png";
import img3 from "./assets/sample/img-3.png";

import { dropdown } from "./dropdown-ui";
import { carousel } from "./carousel-ui";

const domContent = document.querySelector("#content");

const srcArr = [img1, img2, img3];

domContent.appendChild(carousel(srcArr));

// domContent.appendChild(
//   dropdown({
//     title: "Select an option",
//     options: [
//       "option1",
//       "option2",
//       "option3",
//       "option4",
//       "option5",
//       "option1",
//       "option2",
//       "option3",
//       "option4",
//       "option5",
//     ],
//   })
// );
// domContent.appendChild(
//   dropdown({
//     title: "Select an option",
//     options: ["option1", "option2"],
//   })
// );
