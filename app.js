console.log('Connected js file to HTML file')

function enteredInput(){
    let taskEntered = document.getElementById(textInput).value
    document.getElementById(task).innerText.value = taskEntered 
}
