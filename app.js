console.log('Connected JS file to HTML file')

function addTask(){

    //Create a div for each task added with a class
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-div')

    //Create variable for input value and for ul element
    const taskEntered = document.querySelector('#textInput').value
    const toDoList = document.querySelector('.task-list')

    //Create a list element (with a class) for each task added 
    const newTask = document.createElement('li')
    newTask.classList.add('task')

    //Make the new task (li) innertext be the inputted value
    newTask.innerText = taskEntered
    taskDiv.appendChild(newTask)
    
    //append to list
    toDoList.appendChild(taskDiv)

    console.log(taskEntered)

}

// function deleteTask(){

// }