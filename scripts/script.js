let library = [];

const books = document.querySelector("div#catalog");

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

Book.prototype.info = function() {
    const readStatus = this.haveRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`
};

function addBookToLibrary() {
    const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    library.push(book);
}

function render() {
    library.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.textContent = book.info();
        books.appendChild(bookCard);
    });
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
render();