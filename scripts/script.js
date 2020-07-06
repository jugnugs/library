let library = [];

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
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
    let readStatus = prompt("Have you already read this book? (Y/N)");
    if (readStatus === "Y")
        book.haveRead = true;
    else if (readStatus === "N")
        book.haveRead = false;
    library.push(book);
}

// called whenever books in library changes
// makes new book cards
function render() {
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
        line.textContent = `Read Yet: No`;
        info.appendChild(line);

        line = document.createElement("span");
        line.textContent = `Number of Pages Read: ${book.numPages}`;
        info.appendChild(line);

        card.appendChild(info);

        catalog.appendChild(card);
    });
}

const catalog = document.querySelector("#catalog");

addBookToLibrary();
render();