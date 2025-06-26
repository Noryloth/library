// DOM
const newBookBtn = document.getElementById('new-book');
const dialog = document.getElementById("dialog");
const form = document.querySelector("form");
const closeBtn = document.querySelector('.close-button');
const submitBtn = document.querySelector('.submit-button');



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
    const library = document.querySelector('.books');
    library.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookItem = document.createElement('div');
        bookItem.className = "bookItem";

        const bookTitle = document.createElement('h1');
        bookTitle.innerText = `${book.title}`;

        const bookAuthor = document.createElement('h3');
        bookAuthor.innerText = `${book.author}`;

        const bookPages = document.createElement('p');
        bookPages.innerText = `(${book.pages} pages total)`;

        const bookRead = document.createElement('h4');
        bookRead.className = "bookRead";
        book.read ? bookRead.innerText = "You have read this book." : bookRead.innerText = "You have not read this book yet.";

        const rmvBtn = document.createElement('button');
        rmvBtn.className = "remove-button";
        rmvBtn.innerText = "Remove book"

        rmvBtn.addEventListener("on click", () => {
            removeBook([i]);
        });

        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookPages);
        bookItem.appendChild(bookRead);
        bookItem.appendChild(rmvBtn);
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
    
    addBookToLibrary(newBook);
    dialog.close();
    clearForm();

    // console.log(myLibrary);
})


// Add books to a library array
function addBookToLibrary(newBook) {
    // take parameters, create a book and then store it in the array
    myLibrary.push(newBook);

    displayBooks(myLibrary);
}

function clearForm() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-pages').value = '';
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}