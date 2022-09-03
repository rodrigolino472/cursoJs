const taskDescription = document.querySelector('.input-description');
const taskBtn = document.querySelector('.input-btn');
const taskList = document.querySelector('.to-do-list');

function createLi(){
  return document.createElement('li')
}
function taskDelete(){
  const btn = document.createElement('button');
  btn.innerText = 'Delete'
  btn.setAttribute('class', 'delete-btn');
  btn.setAttribute('title', 'Delete this task');
  return btn;

}
function addTask(task){
  let li = createLi()
  li.innerText = task
  li.appendChild(taskDelete())
  taskList.appendChild(li)
  clearInput()
  saveTask()
}
function saveTask(){
  let tasks = document.querySelectorAll('li')
  let allTask = []

  for(task of tasks){
    let taskDescription = task.innerText
    taskDescription = taskDescription.replace('Delete', '').trim()
    allTask.push(taskDescription)
  }
  const tasksJson = JSON.stringify(allTask)
  localStorage.setItem('tasks', tasksJson)
}

function clearInput(){
  taskDescription.value = ''
  taskDescription.focus()
}
taskBtn.addEventListener('click', () => {
  if(!taskDescription.value) return;
  addTask(taskDescription.value)
})
taskDescription.addEventListener('keypress', (e) => {
  if(!taskDescription.value) return;
  if(e.charCode === 13){
    addTask(taskDescription.value)
  }
})
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete-btn')){
    e.target.parentElement.remove()
  }
})
