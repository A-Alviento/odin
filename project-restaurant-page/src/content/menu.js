export const menu = () => {
  const contWrapper = document.createElement("div");
  contWrapper.id = "content-wrapper";

  const title = document.createElement("div");
  title.id = "title";
  title.classList.add("info");
  title.textContent = "Menu";

  contWrapper.appendChild(title);

  for (let i = 0; i < 4; i++) {
    const info = document.createElement("div");
    info.id = `info${i + 1}`;
    info.classList.add("info");
    info.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus similique totam molestias necessitatibus inventore minus in, dolor iusto velit vel quis possimus saepe consequatur tempora veritatis repellat assumenda eos perspiciatis?";

    contWrapper.appendChild(info);
  }

  return contWrapper;
};
