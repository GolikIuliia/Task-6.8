const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', function() {
    alert('Служит для вывода информации в консоль');
});

const aler = document.querySelector('#aler');

aler.addEventListener('click', function() {
    alert('Служит для вывода информации в диалоговое окно с сообщением и кнопкой OK');
});

const prom = document.querySelector('#promp');
prom.addEventListener('click', function() {
    prompt('Служит для вывода информации вывода диалогового окна с сообщением, текстовым полем для ввода данных');
});