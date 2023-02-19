const addForm = document.getElementById('add-form');

// add item

let i = 1;

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    const list = document.getElementById('list');

    const item = document.createElement('div');

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