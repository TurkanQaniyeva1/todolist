const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    const li = document.createElement('li');
    

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = newTask;



    
    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });



    const editButton = document.createElement('button');
    editButton.textContent = '✎';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
      const newText = prompt('Yeni soz elave edin:');
      if (newText) {
        taskText.textContent = newText; 
      }
    });



    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
  }
});
