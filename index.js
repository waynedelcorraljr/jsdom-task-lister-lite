document.querySelector('#create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newTask = document.querySelector('#new-task-description').value;
    let list = document.querySelector('#tasks');
    let li = document.createElement("li");
    li.innerHTML = newTask;
    list.appendChild(li);
    document.querySelector('#create-task-form').reset();
});