const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');
const showAllButton = document.getElementById('showAll');
const showCompletedButton = document.getElementById('showCompleted');
const showUnCompletedButton = document.getElementById('unshowCompleted');

addTaskButton.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;

  console.log('task added');
  const li = document.createElement('li');
  li.addEventListener('click',() => {
    li.classList.toggle('completed');
  })
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  taskInput.value = '';
})

showAllButton.addEventListener('click', () => {
  tasks = taskList.querySelectorAll('li');
  tasks.forEach(task => {
    task.style.display = 'block';
  });
})