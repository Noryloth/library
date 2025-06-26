// DOM
const books = document.querySelector('.books');
const newBookBtn = document.getElementById('new-book');
const dialog = document.getElementById("dialog");
const bookTitle = document.getElementById('book-name');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');
const closeBtn = document.querySelector('.close-button');

// Books array
const myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}


// Display books
function displayBooks(myLibrary) {
    for (let book of myLibrary) {
        const bookItem = document.createElement('div');
        bookItem.className = "book-item";

        const bookTitle = document.createElement('h2');
        bookTitle.innerText = book;

        bookItem.appendChild(bookTitle);
        books.appendChild(bookItem);
    }
}

displayBooks(myLibrary);


// Add new book form
newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

// Form close button
closeBtn.addEventListener("click", (e) => {
    e.preventdDefault();
    dialog.close();
});



// Add books to a library array
function addBookToLibrary(title, author, pages, read) {
    // take parameters, create a book and then store it in the array
    

}



// Books: "The Hobbit", "Captain Blood: His Odyssey", "The Black Corsair", "The King in Yellow"