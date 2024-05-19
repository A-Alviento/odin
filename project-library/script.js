/////////////// books ///////////////
const myLibrary = [
  {
    author: "Fredrik Backman",
    title: "Bear Town",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animiexcepturi ipsam sit ipsum dolorum iure nobis doloremque dolor expeditadignissimos quaerat totam labore, aspernatur delectus consequatur, porro similique neque.",
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
    description.textContent = item.description;

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
  const descValue = desc.value;
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

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("blur", () => {
    if (!element.value.trim()) {
      element.style.borderColor = "red";
    } else {
      element.style.borderColor = "";
    }
  });
});

renderLibrary();
