document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks();

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText !== "") {

            let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click', function() {
                taskList.removeChild(newTask);

                //remove the task from the task array:
                tasks = tasks.filter(task => task !== taskText);

                //save and update tasts array in the localStorage:
                localStorage.setItem('tasks', JSON.stringify(tasks));


            });

            newTask.appendChild(removeButton);

            taskList.appendChild(newTask);

            //clearing thev task input field:
            taskInput.value = "";

            tasks.push(taskText);

            localStorage.setItem('tasks', JSON.stringify(tasks));

        } else {
            alert("Please Enter a Task!");
        }


    }

    function loadTasks() {

        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        tasks.forEach(taskText => {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', function() {
                taskList.removeChild(newTask);
                
                //remove the task from the task array:
                tasks = tasks.filter(task => task !== taskText);

                //save and update the array to the localstorage:
                localStorage.setItem('tasks', JSON.stringify(tasks));
               
            
        });

    });

    addButton.addEventListener('click', function(){ addTask()});

    //To add a task when pressing enter:
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
};

addButton.addEventListener('click', addTask);
});