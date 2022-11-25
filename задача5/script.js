let inputField = document.querySelector('#input');
const duplicateField = document.querySelector('#duplicateField');
let clearForm = document.querySelector('button');

inputField.oninput = function() {
    duplicateField.textContent = inputField.value;
}

clearForm.addEventListener('click', function(event) {
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
});

