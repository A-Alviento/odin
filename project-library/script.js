/////////////// books ///////////////
const myLibrary = [
  {
    author: "Fredrik Backman",
    title: "Bear Town",
    description:
      "A dazzling, profound novel about a small town with a big dream—and the price required to make it come true. <br> People say Beartown is finished. A tiny community nestled deep in the forest, it is slowly losing ground to the ever encroaching trees. But down by the lake stands an old ice rink, built generations ago by the working men who founded this town. And in that ice rink is the reason people in Beartown believe tomorrow will be better than today. Their junior ice hockey team is about to compete in the national semi-finals, and they actually have a shot at winning. All the hopes and dreams of this place now rest on the shoulders of a handful of teenage boys. <br> Being responsible for the hopes of an entire town is a heavy burden, and the semi-final match is the catalyst for a violent act that will leave a young girl traumatized and a town in turmoil. Accusations are made and, like ripples on a pond, they travel through all of Beartown, leaving no resident unaffected. <br> Beartown explores the hopes that bring a small community together, the secrets that tear it apart, and the courage it takes for an individual to go against the grain. In this story of a small forest town, Fredrik Backman has found the entire world.",
    read: false,
    coverSrc:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1482108618i/33413128.jpg",
  },
];

const books = document.querySelector("#books");

function Book(author, title, description, read, coverSrc) {
  this.author = author;
  this.title = title;
  this.description = description;
  this.read = read;
  this.coverSrc = coverSrc;
}

function renderLibrary() {
  // clear children of books
  while (books.firstChild) books.removeChild(books.firstChild);

  myLibrary.forEach((item, idx) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const cover = document.createElement("div");
    cover.classList.add("cover");
    cover.style.background = `url("${item.coverSrc}")`;
    cover.style.backgroundSize = "cover";
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = `${item.title} by ${item.author}`;
    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = item.description;

    const read = document.createElement("button");
    read.classList.add("read");
    read.textContent = "Read";
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "Remove";

    read.addEventListener("click", () => {
      item.read = !item.read;
      if (item.read) {
        bookCard.style.backgroundColor = "#B7E1D2";
      } else {
        bookCard.style.backgroundColor = "#f1f9f6";
      }
    });
    remove.addEventListener("click", () => {
      myLibrary.splice(idx, 1);
      renderLibrary();
      return;
    });

    const options = document.createElement("div");
    options.classList.add("options");
    options.appendChild(read);
    options.appendChild(remove);

    bookCard.appendChild(cover);
    bookCard.appendChild(title);
    bookCard.appendChild(description);
    bookCard.appendChild(options);
    books.appendChild(bookCard);
  });
}

function addBookToLibrary(author, title, description, read, coverSrc) {
  const book = new Book(author, title, description, read, coverSrc);
  myLibrary.push(book);
  renderLibrary();
}

/////////////// sidebar ///////////////
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title");
  const titleValue = title.value;
  const author = document.getElementById("author");
  const authorValue = author.value;
  const desc = document.getElementById("desc");
  let descValue = desc.value;
  descValue = descValue.replace(/\n/g, "<br>");
  const coverSrc = document.getElementById("coverSrc");
  const coverSrcValue = coverSrc.value;

  if (!titleValue || !authorValue || !descValue || !coverSrcValue) {
    if (!titleValue) title.style.borderColor = "red";
    if (!authorValue) author.style.borderColor = "red";
    if (!descValue) desc.style.borderColor = "red";
    if (!coverSrcValue) coverSrc.style.borderColor = "red";
    
    return;
  }

  addBookToLibrary(authorValue, titleValue, descValue, false, coverSrcValue);
});

document.querySelectorAll(".input").forEach((element) => {
  element.addEventListener("blur", () => {
    if (!element.value.trim()) {
      element.style.borderColor = "red";
    } else {
      element.style.borderColor = "";
    }
  });
});

renderLibrary();
