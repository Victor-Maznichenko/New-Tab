const clockContainer = document.querySelector('.clock--js'),
    clockTitle = clockContainer.querySelector('h1');

function getDate() {
    const date = new Date(),
        minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
    getDate();
    setInterval(getDate, 1000);
}
init();