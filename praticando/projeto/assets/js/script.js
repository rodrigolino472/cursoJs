const inputTask = document.querySelector('.inputTask');
const addTaskBtn = document.querySelector('.addTaskBtn');
let taskList = document.querySelector('.taskList');

function createLi(){
  return document.createElement('li')
}
function createDelBtn(task){
  const btn = document.createElement('button')
  btn.innerHTML = 'Delete'
  btn.setAttribute('class', 'deleteTask')
  btn.setAttribute('title', 'Delete this task')
  task.appendChild(btn)
}
function addNewTask(task){
  const li = createLi()
  li.innerText = task
  createDelBtn(li)
  taskList.appendChild(li)
  clearInputTask()
  saveTask()
  console.log(localStorage)
}
function saveTask(){
  const tasks = document.querySelectorAll('li')
  const taskList = []

  for(task of tasks){
    let taskDescription = task.innerText
    taskDescription = taskDescription.replace('Delete', '').trim()
    taskList.push(taskDescription)
  }
  const tasksJson = JSON.stringify(taskList)
  localStorage.setItem('tasks', tasksJson)
}
function loadTasks(){
  const tasks = localStorage.getItem('tasks')
  const taskList = JSON.parse(tasks)

  for(let task of taskList){
    addNewTask(task)
  }
}
function clearInputTask(){
  inputTask.value = ''
  inputTask.focus()
}

//Event listeners
addTaskBtn.addEventListener('click', () => {
  if(!inputTask.value)return;
  addNewTask(inputTask.value);
});
inputTask.addEventListener('keypress', (e) => {
  if(!inputTask.value)return;
  if(e.charCode === 13){
    addNewTask(inputTask.value);
  }
});
taskList.addEventListener('click', (e) => {
  if(e.target.classList.contains('deleteTask')){
    e.target.parentElement.remove()
    saveTask()
  }
})
loadTasks()
