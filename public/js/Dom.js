const form = document.querySelector(".search");
const textInput = document.getElementById("add-input");

const createImage = document.createElement('img');
const createUl = document.createElement('ul');
const createLi = document.createElement('li');
const createDiv = document.createElement('div');

textInput.addEventListener('keyup', () => {
    form.appendChild(createDiv);
    let textValue = textInput.value;
    createDiv.textContent = '';
    createDiv.appendChild(createUl)
    createUl.appendChild(createLi)
    
    
});

console.log('sdbfhj')