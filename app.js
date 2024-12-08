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
    addbook(book){
        let display = document.querySelector('#display');

        let newRow = document.createElement('tr');

        newRow.innerHTML = `
        <th>${book.name}</th>
        <th>${book.author}</th>
        <th>${book.isbn}</th>
        <th><a href='#'>X</a></th>
        `;

        display.appendChild(newRow);
    }

    clear(name,author,isbn){
        name.value = ' ';
        author.value = ' ';
        isbn.value = ' ';
    }

}

const form = document.querySelector("#form")

form.addEventListener('submit', function(e){
    // alert("Form Submitted");

    let book = new Book(nameField.value,authorField.value,isbnField.value);


    let ui = new UI();
    ui.addbook(book);
    ui.clear(nameField,authorField,isbnField)
    e.preventDefault();
})