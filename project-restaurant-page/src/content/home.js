export const home = () => {
  const homeTextContent = [
    "Welcome to [Restaurant Name]!",
    "Experience the finest culinary delights in the heart of [City]. At [Restaurant Name], we take pride in serving exquisite dishes crafted from the freshest ingredients. Our chefs are dedicated to creating an unforgettable dining experience for you and your loved ones.",
    "Join us for a meal and enjoy a warm, welcoming atmosphere that makes you feel right at home. Whether it's a casual lunch, a family dinner, or a special celebration, [Restaurant Name] is the perfect place to savour delicious food and create lasting memories.",
  ];

  const contWrapper = document.createElement("div");
  contWrapper.id = "content-wrapper";

  const title = document.createElement("div");
  title.id = "title";
  title.classList.add("info");
  title.textContent = "Home";

  contWrapper.appendChild(title);

  for (let i = 0; i < homeTextContent.length; i++) {
    const info = document.createElement("div");
    info.id = `info${i + 1}`;
    info.classList.add("info");
    info.textContent = homeTextContent[i];

    contWrapper.appendChild(info);
  }

  return contWrapper;
};
