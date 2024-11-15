document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText !== "") {

            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click', function() {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(removeButton);

            taskList.appendChild(newTask);

            //clearing thev task input field:
            taskInput.value = "";
        } else {
            alert("Please Enter a Task!");
        }
    }

    addButton.addEventListener('click', addTask());

    //To add a task when pressing enter:
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});