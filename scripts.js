const onFormSubmit = (e) => {
    e.preventDefault();

    const todoItem = document.getElementById("todo-item");
    const value = todoItem.value;
    todoItem.value = "";

    const listItem = document.createElement("li");
    listItem.innerHTML = value;

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
};

document.getElementById("todo-form").onsubmit = onFormSubmit;
