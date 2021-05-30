const form = document.querySelector('.form--js'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.greeting--js'),
    username = localStorage.getItem('name');

function showUsername(text) {
    greeting.querySelector('.greeting__name').innerText = text;
    greeting.classList.add('show');
}

function getUsername() {
    if (username == null) {
        form.parentElement.classList.add('show');
        form.addEventListener('submit', () => {
            if (!!(input.value)) {
                localStorage.setItem('name', input.value);
                form.parentElement.classList.remove('show');
                username = localStorage.getItem('name');
            } else {
                alert('Введите имя');
            }
        });
    }
    showUsername(username);
}

function init() {
    getUsername();
}
init();