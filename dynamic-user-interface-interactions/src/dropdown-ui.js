import { createDropdown } from "./dropdown";

import menuRight from "./assets/menu-right.svg";
import menuDown from "./assets/menu-down.svg";

const dropdownVisibilityLogic = (dropdownWrapper, dropdownContent) => {
  const mainDropdown = dropdownWrapper.querySelector(".dropdown");
  const dropdownIcon = dropdownWrapper.querySelector(".dropdown-icon");

  mainDropdown.addEventListener("click", (e) => {
    if (mainDropdown.classList.contains("visible")) {
      dropdownWrapper.removeChild(dropdownContent);
      mainDropdown.classList.remove("visible");
      dropdownIcon.src = menuRight;
    } else {
      dropdownWrapper.appendChild(dropdownContent);
      mainDropdown.classList.add("visible");
      dropdownIcon.src = menuDown;
    }
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (mainDropdown.classList.contains("visible")) {
      dropdownWrapper.removeChild(dropdownContent);
      mainDropdown.classList.remove("visible");
    }
  });

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (mainDropdown.classList.contains("visible")) {
        dropdownWrapper.removeChild(dropdownContent);
        mainDropdown.classList.remove("visible");
      }
    });
  });
};

const dropdownItemSelectionLogic = (dropdownWrapper, dropdownContent) => {
  const mainDropdown = dropdownWrapper.querySelector(".dropdown");
  const dropdownTitle = dropdownWrapper.querySelector(".dropdown-title");

  dropdownContent.childNodes.forEach((item) => {
    item.addEventListener("click", (e) => {
      dropdownWrapper.removeChild(dropdownContent);
      mainDropdown.classList.remove("visible");
      dropdownTitle.textContent = e.target.textContent;
    });
  });
};

const createDropdownUI = (dropdown) => {
  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.classList = "dropdown-wrapper";

  const mainDropdown = document.createElement("button");
  mainDropdown.classList.add("dropdown");

  const dropdownIcon = document.createElement("img");
  dropdownIcon.classList.add("dropdown-icon");
  dropdownIcon.src = menuRight;

  const dropdownTitle = document.createElement("span");
  dropdownTitle.classList.add("dropdown-title");
  dropdownTitle.textContent = dropdown.getTitle();

  mainDropdown.appendChild(dropdownTitle);
  mainDropdown.appendChild(dropdownIcon);

  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  dropdown.getOptions().forEach((item) => {
    const dropdownItem = document.createElement("div");
    dropdownItem.classList.add("dropdown-item");
    dropdownItem.textContent = item;
    dropdownContent.appendChild(dropdownItem);
  });

  dropdownWrapper.appendChild(mainDropdown);

  return { dropdownWrapper, dropdownContent };
};

export const dropdown = ({ title, options }) => {
  const dropdown = createDropdown({ title, options });

  const { dropdownWrapper, dropdownContent } = createDropdownUI(dropdown);
  // add logic
  dropdownVisibilityLogic(dropdownWrapper, dropdownContent);
  dropdownItemSelectionLogic(dropdownWrapper, dropdownContent);

  return dropdownWrapper;
};
