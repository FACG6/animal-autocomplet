
const form = document.querySelector(".search");
const textInput = document.getElementById("add-input");
const createImage = document.createElement('img');
const createUl = document.createElement('ul');
const createLi = document.createElement('li');
const createDiv = document.createElement('div');

textInput.addEventListener('keyup', () => {
    // createDiv.appendChild();
    const result = xhrRequestKeyUp((response) => {
        const value = textInput.value;
        const result = filterAutoComlete(response, value);

    })



});

console.log('sdbfhj')