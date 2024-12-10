let nameField = document.querySelector('#name');
let authorField = document.querySelector('#author');
let isbnField = document.querySelector('#isbn');


class Book{
    constructor(name,author,isbn){
        this.name = name;
        this.author = author;
        this.isbn = isbn;

    }
}


class UI{
    
    showMessage(message,type){
        document.querySelector('#message').innerHTML = `<p class="${type}">${message}</p>`;

        setTimeout(function(){
            document.querySelector('#message').innerHTML = '';
        },1000);

    }
    addbook(book){
        let display = document.querySelector('#display');
        let newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class = 'delete-item' >X</a> </td>
        `;

    display.appendChild(newRow);
    }
    removeBook(target){
        if(target.className === 'delete-item'){
            target.parentElement.parentElement.remove();
        }else{
            alert('Nahi hoga');
        }

    }

    clear(name, author, isbn){
        name.value = ' ';
        author.value = ' ';
        isbn.value = ' ';
    }
}

class Storage{
    
    static getCurrentBooks(){
        let books = []

        if(localStorage.getItem('mybooks') === null){
            return books;
        }else{
            books = localStorage.getItem("mybooks");
            return books;
        }
    }
    static addBookToMemory(book){
        let books = Storage.getCurrentBooks();
        // books.push(book);
        // localStorage.setItem('mybooks', book);

        books.push(book);
        localStorage.setItem('mybooks',books);
        console.log('books');
    }
        
        


    static removeBookFromMemory(){

    }
    static displayBookFromMemory(){

    }
}

// Add a book to UI
const form = document.querySelector("#form")

form.addEventListener('submit', function(e){
    // alert("Form Submitted");

    let book = new Book(nameField.value, authorField.value, isbnField.value);
    let ui = new UI();

    if(nameField.value === '' || authorField.value === '' || isbnField.value === ''){
        // alert("Fill all fields");
        ui.showMessage("Add all the fields","error");
    }
    else{
        ui.addbook(book);
        Storage.addBookToMemory(book);
        ui.clear(nameField, authorField, isbnField);
        ui.showMessage("Book added successfully","success");

    } 
   e.preventDefault();

    // Validation
    // Error Message 
    // Delete button
    // local Storage
});

// To remove a book

document.querySelector('#display').addEventListener('click',function(e){
    // console.log(e.target);
    // alert("Clicked");
    let ui = new UI()
    ui.removeBook(e.target);
    ui.showMessage("Book Deleted","Success")
});