// DOM
const newBookBtn = document.getElementById('new-book');
const dialog = document.getElementById("dialog");
const form = document.querySelector("form");
const closeBtn = document.querySelector('.close-button');
const submitBtn = document.querySelector('.submit-button');
const clearBtn = document.querySelector('.clear-button');


// Books array
const myLibrary = [];


// Book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
}
}


// Display books
function displayBooks(myLibrary) {
    const library = document.querySelector('.books');
    library.innerHTML = '';
    
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookItem = document.createElement('div');
        bookItem.className = "bookItem";

        bookItem.innerHTML = `
            <div> 
                <h1 class="title">${book.title}</h1>
                <h3 class=author">${book.author}</h3>
                <p>${book.pages} pages total</p>
                <h4 class="read">${book.read ? "You have read this book." : "You have not read this book yet"}</p>
            </div>
            <div class=book-buttons>
                <button class="remove-button" onclick="removeBook(${i})">Remove book</button>
                <button class="read-status" onclick="toggleRead(${i})">Mark as read</button>
            </div>`

        library.appendChild(bookItem);
    }
}


// Add new book form
newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});


// Form close button
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});


// Form submit button
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').checked;

    const newBook = new Book(title, author, pages, read);

    // Show a message when user input is empty
    if (title === '' || author === '' || pages === '') {
        alert('Please, write information about a book.');
    } else {
        addBookToLibrary(newBook);
        dialog.close();
        clearForm();
    }
});


// Add books to a library array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

    displayBooks(myLibrary);
}


// Clear form
function clearForm() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-pages').value = '';
}


// Remove book button
function removeBook(i) {
    myLibrary.splice(i, 1);
    displayBooks(myLibrary);
}


// Toggle read status
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(i) {
    myLibrary[i].toggleRead();
    displayBooks(myLibrary);
}


// Clear button
clearBtn.addEventListener("click", () => {
    myLibrary.splice(0, myLibrary.length);
    displayBooks(myLibrary);
});