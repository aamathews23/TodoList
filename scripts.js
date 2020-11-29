const items = [];

const onFormSubmit = (e) => {
    e.preventDefault();

    const todoItem = document.getElementById("todo-item");
    const value = todoItem.value;
    todoItem.value = "";

    const listItem = document.createElement("li");
    listItem.innerHTML = value;

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);

    items.push(value);
    document.getElementById("todo-list-section").hidden = false;
};

window.onload = () => {
    document.getElementById("todo-form").onsubmit = onFormSubmit;
    
    if (items && items.length == 0) {
        document.getElementById("todo-list-section").hidden = true;
    }
};

