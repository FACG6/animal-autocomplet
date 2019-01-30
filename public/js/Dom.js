
const form = document.querySelector(".search");
const textInput = document.getElementById("add-input");
const createImage = document.createElement('img');
const createUl = document.createElement('ul');
const createDiv = document.createElement('div');

textInput.addEventListener('keyup', () => {
    form.appendChild(createDiv);
    console.log("jamal");
    createDiv.appendChild(createUl);
    const result = xhrRequestKeyUp((response) => {
        const value =  textInput.value.toUpperCase();
        console.log(value);
        const result = filterAutoComlete(response, value);
        deleteChild(createUl);
        result.forEach(element =>{
            const createLi = document.createElement('li');
            createUl.appendChild(createLi);
            createLi.textContent=element;
        })
       

    })



});
let deleteChild = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }