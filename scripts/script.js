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
    // const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    const book = new Book();
    book.title = prompt("Title of book: ");
    book.author = prompt("Author: ");
    book.numPages = prompt("Number of pages read so far: ");
    let readStatus = prompt("Have you already read this book? (Y/N)");
    if (readStatus === "Y") 
        book.haveRead = true;
    else if (readStatus === "N")
        book.haveRead = false;
    library.push(book);
}

// called whenever books in library changes
function render() {
    library.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.textContent = book.info();
        books.appendChild(bookCard);
    });
}

addBookToLibrary();
render();