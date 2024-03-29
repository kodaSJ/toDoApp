console.log('Connected JS file to HTML file')

function addTask(){

    //Create a div for each task added with a class
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-div')

    //Create variable for users input value and for ul element
    const taskEntered = document.querySelector('#textInput').value
    const toDoList = document.querySelector('.task-list')

    if (taskEntered == ''){
            alert('That task was empty... Please enter a task!')
        } else {
            //Create a list element (with a class) for each task added 
            const newTask = document.createElement('li')
            newTask.classList.add('task')
            //Allow user input to become the list element innertext 
            newTask.innerHTML = taskEntered
            taskDiv.appendChild(newTask)
            //Create a delete button, used to remove the whole element from the list
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('del-btn')
            deleteButton.innerHTML = 'x'
      
            //Append each individual task to the ul element (to do list)
            toDoList.appendChild(taskDiv)
            taskDiv.appendChild(deleteButton)
            console.log(taskEntered)
        }
}