import "./reset.css";
import "./style.css";

import { home } from "./content/home";
import { menu } from "./content/menu";
import { contact } from "./content/contact";

const content = document.querySelector("#content");
const homeContent = home();
const menuContent = menu();
const contactContent = contact();

const contentList = [homeContent, menuContent, contactContent];

// initial content
content.appendChild(homeContent);

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

[homeBtn, menuBtn, contactBtn].forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    while (content.firstChild) content.removeChild(content.firstChild);

    content.appendChild(contentList[idx]);
  });
});
