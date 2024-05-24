
window.onload = function() {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        taskList = storedTasks;
        displayTasks();
    }
}

function addTask() {
    let taskTextarea = document.getElementById('taskTextarea');
    let task = taskTextarea.value.trim();
    
    if (task !== '') {
        taskList.push(task);
        taskTextarea.value = '';
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
}

function viewTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
    window.location.href = 'tasks.html';
}

function deleteTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
}

function displayTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        
        li.appendChild(deleteButton);
        taskListElement.appendChild(li);
    });
}

function goBack() {
    window.location.href = 'todolist.html';
}




