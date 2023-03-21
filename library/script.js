let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
}

function addBookToLibrary() {
    // do stuff here
  let newBook = new Book(document.getElementById('name').value); myLibrary.push(newBook)
  show();
}

function removeBookToLibrary(e) {
id_delete = e.target.parentElement.getAttribute("data-id");
myLibrary.splice(id_delete, 1);
show();
}

let body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container')
body.appendChild(container);

function show(){
  clean();
  // Loop through array and print out each element in html
 for ( let i = 0; i < myLibrary.length; i++) {
     let div = document.createElement('div');
     div.classList.add('box')
     div.textContent = myLibrary[i].name;
     div.dataset.id = i;
     let del = document.createElement('button');
     del.classList.add('btn-del')
     del.textContent = 'Delete Book';
     div.appendChild(del);
     container.appendChild(div);
 }
dele();
}

function clean(){
  container.innerHTML = '';
}

let div = document.createElement('div');
div.classList.add('btn-center')
div.classList.add('open')
let button = document.createElement('button');
button.textContent = 'New Book';
div.appendChild(button);
body.appendChild(div);

let openFormBtns = document.querySelectorAll(".open");
let closeFormBtns = document.querySelectorAll(".close");
let sendFormBtns = document.querySelector("#send");
let overlay = document.querySelector('#overlay');
let form = document.querySelector('#form');
let delBtns = document.querySelectorAll('.btn-del');

openFormBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    openForm();
  })
})

closeFormBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    closeForm();
  })
})

sendFormBtns.addEventListener('click', (event) => {
    event.preventDefault();
  })

function openForm(){
  form.classList.add('active');
  overlay.classList.add('active');
}

function closeForm(){
  form.classList.remove('active');
  overlay.classList.remove('active');
}

function dele(){
  let del = document.querySelector('.btn-del');
  del.addEventListener('click', (e) => {
      removeBookToLibrary(e);
    })
}