// To-Do List Application
class ToDoList {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      this.render();
    }
  
    addTask(task) {
      this.tasks.push({ text: task, completed: false });
      this.saveTasks();
      this.render();
    }
  
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasks();
      this.render();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
      this.render();
    }
  
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    render() {
      const list = document.getElementById('taskList');
      list.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const item = document.createElement('li');
        item.textContent = task.text;
        if (task.completed) item.style.textDecoration = 'line-through';
        item.onclick = () => this.toggleTask(index);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          this.deleteTask(index);
        };
        item.appendChild(deleteBtn);
  
        list.appendChild(item);
      });
    }
  }
  
  const toDoList = new ToDoList();
  
  document.getElementById('addTaskBtn').onclick = () => {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value) {
      toDoList.addTask(taskInput.value);
      taskInput.value = '';
    }
  };
  
  // Calculator with Additional Operations
  function calculate() {
    const expression = document.getElementById('calcInput').value;
    try {
      const result = eval(expression.replace('^', '**'));
      document.getElementById('calcResult').textContent = `Hasil: ${result}`;
    } catch (error) {
      document.getElementById('calcResult').textContent = 'Error';
    }
  }
  
  document.getElementById('calcBtn').onclick = calculate;
  
  // Form Validation
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.length <= 3) {
      alert('Nama harus lebih dari 3 karakter');
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert('Email tidak valid');
      return false;
    }
  
    if (password.length < 8) {
      alert('Password harus minimal 8 karakter');
      return false;
    }
  
    alert('Form valid');
    return true;
  }
  
  document.getElementById('validateBtn').onclick = validateForm;  