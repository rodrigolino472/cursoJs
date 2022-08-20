const inputToDo = document.querySelector('.input-new-item')
const btnToDo = document.querySelector('.btn-add-item')
const toDoList = document.querySelector('.tarefas')

function newLi(){
  const li = document.createElement('li')
  return li
}
function clearBtn(li){
  const clearButton = document.createElement('button')
  clearButton.innerHTML = 'delete'
  clearButton.setAttribute('class', 'clear')
  clearButton.setAttribute('title', 'Delete this task')
  li.appendChild(clearButton)
}
function createToDo(textInput){
  const li = newLi()
  li.innerHTML = textInput
  toDoList.appendChild(li)
  clearBtn(li)
  clear()
  saveTask()
}
function saveTask(){
  const tasks = toDoList.querySelectorAll('li')
  const taskList = []

  for(task of tasks){
    let taskDescription = task.innerText
    taskDescription = taskDescription.replace('delete', '').trim()
    taskList.push(taskDescription)
  }
  const tasksJson = JSON.stringify(taskList)
  localStorage.setItem('tasks', tasksJson)
}
function loadTasks(){
  const tasks = localStorage.getItem('tasks')
  const taskList = JSON.parse(tasks)
  
  for(let tarefa of taskList){
    createToDo(tarefa)
  }
}
function clear(){
  inputToDo.value = ''
  inputToDo.focus()
}
btnToDo.addEventListener('click', () => {
  if(!inputToDo.value)return;
  createToDo(inputToDo.value)
})
inputToDo.addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    if(!inputToDo.value)return;
    createToDo(inputToDo.value)
  }
})
document.addEventListener('click', (e) => {
  const el = e.target
  if(el.classList.contains('clear')){
    el.parentElement.remove()
    saveTask()
  }
})
loadTasks()
