const formSubmit = document.querySelector('.search');
const textInput = document.getElementById("add-input");
const createImage = document.createElement('img');
const createUl = document.createElement('ul');
const createLi = document.createElement('li');
const createDiv = document.createElement('div');

const createElements = (tag, name, parent, className) => {
    let newElement = document.createElement(tag);
    newElement.classList.add(className);
    if (tag === 'img') {
        newElement.src = name;
    } else {
        newElement.textContent = name;
    }
    parent.appendChild(newElement);
}

let deleteChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

textInput.addEventListener('keyup', () => {
    const result = xhrRequest((response) => {
        const value = textInput.value;
    })



});

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = textInput.value;
    let containerSearch = document.getElementById('search_result');
    console.log(value);
    deleteChild(containerSearch);
    xhrRequest((response) => {
        let result = filterFile(response, value);
        if(Object.keys(result).length==0 || !(value)){
            createElements('p', "No Result", containerSearch, 'error');
        }
        else{
            for (let key in result) {
                let element = result[key];
                createElements('p', key, containerSearch, 'name');
                createElements('img', img(element), containerSearch, 'image');
                createElements('p', description(element), containerSearch, 'description');
                createElements('p', '---------------------------', containerSearch, 'line');
            }
        }
    })
})