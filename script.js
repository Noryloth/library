// DOM
const books = document.querySelector('.books');


// Books array
const myLibrary = ["The Hobbit", "Captain Blood: His Odyssey", "The Black Corsair", "The King in Yellow"];


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


function addBookToLibrary(title, author, pages, read) {
    // take parameters, create a book and then store it in the array

}



// Books: "The Hobbit", "Captain Blood: His Odyssey", "The Black Corsair", "The King in Yellow"