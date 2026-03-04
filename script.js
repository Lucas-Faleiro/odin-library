const bookList = document.querySelector("#book-list");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: false,
  },
];

for (let book of myLibrary) {
  const bookContainer = document.createElement("div");
  bookList.appendChild(bookContainer);

  for (let propertyValue of Object.values(book)) {
    console.log(propertyValue);

    const span = document.createElement("span");
    span.innerText = propertyValue;
    bookContainer.appendChild(span);
  }
}

function Book() {}

function addBookToLibrary() {}
