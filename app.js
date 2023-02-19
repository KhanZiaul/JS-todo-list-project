const addForm = document.getElementById('add-form');

let i = 4;

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    const list = document.getElementById('list');

    const item = document.createElement('div');

    item.innerHTML = `

    <div class="flex justify-between items-center border-2 p-3 mb-4 rounded-xl lg:w-[75%] mx-auto">
                <div>
                    <li class="text-xl"> ${i} . ${todo}</li>

                </div>

                <div>
                    <i class="fa-solid fa-trash block cursor-pointer"></i>
                </div>
            </div>

    `;

    if(addForm.add.value === ""){

        return false;
    }

    list.appendChild(item);

    addForm.add.value = "";

    i++;
})