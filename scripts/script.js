let library = [];

function Book(title, author, numPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readStatus = readStatus;
}

Book.prototype.info = function () {
    const readStatus = this.haveRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`
};

function addBookToLibrary() {
    // const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    const book = new Book();
    book.title = prompt("Title of book: ");
    book.author = prompt("Author: ");
    book.numPages = prompt("Number of pages read so far: ");
    book.readStatus = prompt("Have you already read this book? (Y/N)");
    library.push(book);
}

// called whenever books in library changes
// makes new book cards
function render() {
    clearDisplay();   
    library.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        const title = document.createElement("h1");
        title.textContent = book.title;
        card.appendChild(title);

        const info = document.createElement("div");
        info.classList.add("info");

        let line = document.createElement("span");
        line.textContent = `Author: ${book.author}`;
        info.appendChild(line);

        line = document.createElement("span");
        line.textContent = `Read Yet: ${book.readStatus}`;
        info.appendChild(line);

        line = document.createElement("span");
        line.textContent = `Number of Pages Read: ${book.numPages}`;
        info.appendChild(line);

        card.appendChild(info);

        catalog.appendChild(card);
    });
}

function clearDisplay() {
    while(catalog.firstChild) {
        catalog.removeChild(catalog.firstChild);
    }
}

const catalog = document.querySelector("#catalog");
const addBtn = document.querySelector("button.add");
console.log(addBtn);

addBtn.addEventListener("click", e => {
    addBookToLibrary();
    render();
})