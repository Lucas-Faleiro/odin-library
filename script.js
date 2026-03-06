const bookList = document.querySelector("#book-list");

const myLibrary = [];

console.log(Object.entries(myLibrary));

function displayBooks() {
  bookList.innerHTML = "";
  for (let book of myLibrary) {
    const bookContainer = document.createElement("div");
    bookList.appendChild(bookContainer);
    bookContainer.setAttribute("class", "book-card");

    for (let [key, value] of Object.entries(book)) {
      if (key === "id") continue;

      if (key === "read") {
        const readBtn = document.createElement("button");

        if (value === true) {
          readBtn.innerText += "Already Read";
          readBtn.setAttribute("id", "already-read");
        } else {
          readBtn.innerText += "Not Read";
          readBtn.setAttribute("id", "not-read");
        }
        readBtn.addEventListener("click", () => {
          value = !value;
          if (value === true) {
            readBtn.innerText = "Already Read";
            readBtn.setAttribute("id", "already-read");
          } else {
            readBtn.innerText = "Not Read";
            readBtn.setAttribute("id", "not-read");
          }
        });
        bookContainer.appendChild(readBtn);
        continue;
      }

      const span = document.createElement("span");

      if (key === "pages") {
        span.innerText += "Pages: ";
      }

      span.innerText += value;
      bookContainer.appendChild(span);
      span.setAttribute("class", "book-item");
    }
    const removeBookBtn = document.createElement("button");
    removeBookBtn.innerText = "Remove Book";
    removeBookBtn.setAttribute("id", "remove-book-btn");
    bookContainer.appendChild(removeBookBtn);
    removeBookBtn.addEventListener("click", () => {
      const bookIndex = myLibrary.indexOf(book);
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    });
  }
}

const openFormBtn = document.querySelector("#open-form-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const dialogForm = document.querySelector("#modal");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");

openFormBtn.addEventListener("click", () => {
  dialogForm.showModal();
});

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const read = bookRead.checked;
  addBookToLibrary(title, author, pages, read);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.value = "";
  dialogForm.close();
});

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
  console.log(myLibrary);
}

displayBooks();
