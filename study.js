const textButton = document.getElementById('change-text');
const hideButton = document.getElementById('hide-text');
const colorButton = document.getElementById('change-color');
const textElement = document.getElementById('main-text');

textButton.addEventListener('click', function() {
    if (textElement.textContent === 'Hello, World!') {
        textElement.textContent = 'Text has been changed!';
    } else {        textElement.textContent = 'Hello, World!';
    }
})

hideButton.addEventListener('click', function() {
    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
    } else {        textElement.style.display = 'none';
    }
})

colorButton.addEventListener('click', function() {
    if (textElement.style.color === 'red') {
        textElement.style.color = 'black';
    } else {        textElement.style.color = 'red';
    }
})
