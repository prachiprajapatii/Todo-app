let textData = document.getElementById("textdata");
let AddTodo = document.getElementById("addtodo");
const mainTodo = document.querySelector(".todo-items");

const gettodo = () => {
    return JSON.parse(localStorage.getItem("todo-list"));
};

const addtodolocal = (localTodo) => {
    return localStorage.setItem("", JSON.stringify(localTodo));
};

let localTodo = gettodo() || [];

addtododynamic = (curElm) => {
    const divElem = document.createElement("div");
    divElem.classList.add("maintodo");
    divElem.innerHTML = `<li>${curElm}</li><button class = "delete">Delete</button>`;
    mainTodo.append(divElem);
};

const addTodoList = (e) => {
    e.preventDefault();
    const todolistvalue = textData.value.trim();

    textData.value = "";

    if (todolistvalue !== "" && !localTodo.includes(todolistvalue)) {
        localTodo = gettodo() || [];

        localTodo.push(todolistvalue);
        localTodo = [... new Set(localTodo)];
        console.log(localTodo);
        localStorage.setItem("todo-list", JSON.stringify(localTodo));

        addtododynamic(todolistvalue);
    }
};
const showtodo = () => {
    console.log(localTodo);

    localTodo.forEach(curElm => {
        addtododynamic(curElm);
    });

};

showtodo();

const removetodo = (e) => {
    if (e.target.classList.contains("delete")) {
        const todoremove = e.target;
        let todocontent = todoremove.previousElementSibling.innerText;

        localTodo = localTodo.filter((curtodo) => {
            return curtodo !== todocontent;
        });

        localStorage.setItem("todo-list", JSON.stringify(localTodo));

        todoremove.parentElement.remove();
    }

};


mainTodo.addEventListener("click", (e) => {
    e.preventDefault();
    removetodo(e);
});

AddTodo.addEventListener("click", (e) => { addTodoList(e); });


