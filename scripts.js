/*
    A basic JavaScript file that includes the basic behavior of the web page.
 
    This file demos basic DOM manipulation and how we can use JavaScript to programatically
    set CSS classes and properties.

    We also learn how to set up event handlers and utilize the event object.

    Author: Aaron Mathews
    Date: 12/1/2020
*/

// Global constant to hold the class name for the clicked item class
const STRIKE_THROUGH = "clicked-item";

/*
    This event handler handles the form submit function of our todo-form.

    If the user entered a valid input the input will be taken and added to the todo-list.
    If the user didn't enter a valid input an error message will be displayed.

    Params:
        e - the JS event object

    Author: Aaron Mathews
    Date: 12/1/2020
*/
const onFormSubmit = (e) => {
    // Cancel the default event behavior for the HTML form
    e.preventDefault();

    const errorMessage = document.getElementById("error-message");
    const todoItem = document.getElementById("todo-item");
    const value = todoItem.value;

    // If the value exisits add it to the todo-list.
    // Else, show the error message.
    if (value) {

        // Create the list item HTML element
        const listItem = document.createElement("li");
        listItem.innerHTML = value;
        listItem.onclick = todoItemOnClick;
        listItem.classList = "todo-list-item";

        // Add the list item to the HTML list
        const todoList = document.getElementById("todo-list");
        todoList.appendChild(listItem);

        // Select and hide empty list image
        const todoListSection = document.getElementById("todo-list-section");
        const emptyListSection = document.getElementById("empty-list-section");

        todoListSection.removeChild(emptyListSection);
        todoItem.value = "";
        errorMessage.hidden = true;
    } else {
        errorMessage.hidden = false;
    }
};

/*
    This event handler handles the on click event of the todo-list-item element.

    When a todo-list-item element is clicked we want to either add or remove the STRIKE_THROUGH class
    based on whether the class was already added or not.

    Here we learn how to manipulate an HTML element's class list using JavaScript.

    Params:
        e - the JS event object

    Author: Aaron Mathews
    Date: 12/1/2020
*/
const todoItemOnClick = (e) => {

    // Get the HTML element's class list
    const classList = e.target.classList;

    // If the class list already contains the STRIKE_THROUGH class, remove it.
    // Else, add the STRIKE_THROUGH class to the class list.
    if (classList.contains(STRIKE_THROUGH)) {
        classList.remove(STRIKE_THROUGH);
    } else {
        e.target.classList.add(STRIKE_THROUGH);
    }    
};

/*
    Use an anonymous function to create an event handler for the window object's on load event.

    This anonymous function will set the todo-form's on submit event to the event handler function declared above.
*/
window.onload = () => {
    document.getElementById("todo-form").onsubmit = onFormSubmit;
};
