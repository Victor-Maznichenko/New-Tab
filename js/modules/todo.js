const todoForm = document.querySelector('.todo__form--js'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.todo__list'),
    todoName = document.querySelector('.footer__todo-name'),
    dropDown = document.querySelector('.footer__todo-dropdown');
tasksLS = 'Tasks';
let tasks = [];

function loadTasks() {
    const tasksList = localStorage.getItem(tasksLS);
    if (tasksList !== null) {
        const parsedList = JSON.parse(tasksList)
        parsedList.forEach((task) => {
            showTodo(task.name);
        });
    }
}

function saveTodo() {
    localStorage.setItem(tasksLS, JSON.stringify(tasks));
}

function delTodo(e) {
    const li = e.target.parentNode.parentNode,
        cleanTask = tasks.filter(function(task) {
            return task.id !== parseInt(li.id);
        });
    todoList.removeChild(li);
    tasks = cleanTask;
    saveTodo();
}

function clearTodo() {
    todoList.innerHTML = '';
    tasks = [];
    saveTodo();
}

function showTodo(text) {
    const li = document.createElement('li'),
        delBtn = document.createElement('button'),
        span = document.createElement('span'),
        clearAll = document.querySelector('.footer__todo-clear'),
        newId = tasks.length + 1;
    delBtn.classList.add('footer__todo-close')
    delBtn.innerHTML = '<div class="close"></div>';
    span.textContent = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        name: text,
        id: newId
    };
    tasks.push(todoObj);
    saveTodo();
    delBtn.addEventListener('click', delTodo);
    clearAll.addEventListener('click', clearTodo);
}

function submitHangler(e) {
    e.preventDefault();
    const currentValue = todoInput.value;
    showTodo(currentValue);
    todoInput.value = '';
}

function init() {
    loadTasks();
    todoForm.addEventListener('submit', submitHangler);
    todoName.addEventListener('click', () => {
        dropDown.classList.toggle('hide');
    });
}
init();