// OO solution
const contentBox = document.getElementById('main-content');
contentBox.style.backgroundColor = 'lightblue';

const body = document.querySelector('body');
body.style.background = 'teal';

document.addEventListener("DOMContentLoaded", () => {
 const newForm = document.getElementById('create-task-form');
 const taskInput = document.getElementById("new-task-description");
 const taskUl = document.getElementById("tasks");

 newForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const task = taskInput.value;
  
  if (task !== '') {
    const newTask = document.createElement('li');
    newTask.innerText = task;
    taskUl.appendChild(newTask);
    taskInput.value = '';
  

  const deleteButton = document.createElement('button');
    deleteButton.style.fontSize = '15px';
    deleteButton.style.margin = '5px', '0', '5px', '5px';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      newTask.remove();
    });
    newTask.appendChild(deleteButton);
  }

 });

});