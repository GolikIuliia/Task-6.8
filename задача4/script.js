let link = document.querySelector('a'); 

const changeUrl = document.querySelector('#changeUrl');
    changeUrl.addEventListener('click', (event) => {
        const newUrl = prompt('Введите новый текст ссылки');
        changeUrl.textContent = newUrl;
        event.preventDefault();
    })

link.addEventListener('focus', () => {
    console.log('Кликнули');

})


