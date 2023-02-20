const addForm = document.getElementById('add-form');

const search = document.getElementById('search');

// add item

let i = 1;

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    const list = document.getElementById('list');

    const item = document.createElement('li');

    item.innerHTML = `

    <li class="text-xl flex justify-between items-center border-2 p-3 mb-4 rounded-xl lg:w-[75%] mx-auto"> 

    <span class="block">${i} . ${todo}</span>

    <i class="fa-solid fa-trash block cursor-pointer delete"></i>

    </li>

    `;

    if(addForm.add.value === ""){

        return false;
    }

    list.appendChild(item);

    addForm.add.value = "";

    i++;
})

// delete items

document.getElementById('list').addEventListener('click', e => {

    if(e.target.classList.contains('delete')){

        e.target.parentNode.parentNode.remove();

        i--;
    };
});

// search

const filterTodos = function(term){

    const todos = document.getElementById('list');

    Array.from(todos.children)

    .filter(function(todo){

        return !todo.textContent.includes(term);
    })
    .forEach(function(todo){
        
        todo.classList.add('hidden');
    })

    Array.from(todos.children)

    .filter(function(todo){

        return todo.textContent.includes(term);
    })
    .forEach(function(todo){
        
        todo.classList.remove('hidden');
    })
}


search.addEventListener('keyup',function(){

    const term = search.searchHere.value.trim();

    filterTodos(term);
});