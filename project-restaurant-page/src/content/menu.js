export const menu = () => {
  const menuTextContent = [
    "Discover Our Menu",
    "At [Restaurant Name], we offer a diverse selection of dishes to satisfy every palate. From delectable starters to mouth-watering mains and indulgent desserts, our menu is designed to delight.",
    "Starters: <br> - Soup of the Day: A delightful soup made with fresh, seasonal ingredients. <br> - Bruschetta: Toasted bread topped with tomatoes, basil, and olive oil. <br> - Calamari: Lightly breaded and fried calamari served with a tangy dipping sauce.",
    "Mains: <br> - Grilled Salmon: Fresh salmon fillet grilled to perfection, served with a side of vegetables. <br> - Chicken Alfredo: Tender chicken breast in a creamy Alfredo sauce, served over fettuccine pasta. <br> - Vegetarian Lasagne: Layers of pasta, vegetables, and cheese baked to a golden perfection.",
    "Desserts: <br> - Chocolate Lava Cake: Rich chocolate cake with a gooey centre, served with vanilla ice cream. <br> - Tiramisu: Classic Italian dessert with layers of mascarpone cheese, coffee-soaked ladyfingers, and cocoa. <br> - Cheesecake: Creamy cheesecake with a buttery graham cracker crust, topped with fresh berries.",
    "Come and explore our full menu, and let your taste buds be your guide!",
  ];

  const contWrapper = document.createElement("div");
  contWrapper.id = "content-wrapper";

  const title = document.createElement("div");
  title.id = "title";
  title.classList.add("info");
  title.textContent = "Menu";

  contWrapper.appendChild(title);

  for (let i = 0; i < menuTextContent.length; i++) {
    const info = document.createElement("div");
    info.id = `info${i + 1}`;
    info.classList.add("info");
    info.innerHTML = menuTextContent[i];

    contWrapper.appendChild(info);
  }

  return contWrapper;
};
