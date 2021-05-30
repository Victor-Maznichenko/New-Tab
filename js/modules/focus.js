const focusForm = document.querySelector('.main__focus-form'),
    focusInput = focusForm.querySelector('input'),
    focusOutput = document.querySelector('.main__focus-task'),
    focusDel = document.createElement('button'),
    focusLS = 'Focus';

focusDel.innerHTML = '<div class="close"></div>';
focusDel.classList.add('main__focus-close');


function loadTasks() {
    const focusList = localStorage.getItem(focusLS);
    if (focusList !== null && focusList !== '') {
        focusOutput.innerHTML = focusList;
        focusOutput.appendChild(focusDel);
        focusInput.parentElement.classList.add('anim-hide');
        focusOutput.parentElement.classList.add('anim-show');
    }
}

function delTasks() {
    localStorage.setItem(focusLS, '');
    focusInput.parentElement.classList.remove('anim-hide');
    focusOutput.parentElement.classList.remove('anim-show');
}

function submitHangler(e) {
    e.preventDefault();
    localStorage.setItem(focusLS, focusInput.value);
    focusOutput.innerHTML = focusInput.value;
    focusOutput.appendChild(focusDel);
    focusInput.blur();
    focusInput.value = '';
    focusInput.parentElement.classList.add('anim-hide');
    focusOutput.parentElement.classList.add('anim-show');
}

function init() {
    loadTasks();
    focusForm.addEventListener('submit', submitHangler);
    focusDel.addEventListener('click', delTasks);
}
init();