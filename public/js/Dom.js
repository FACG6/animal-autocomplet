
const form = document.querySelector(".search");
const textInput = document.getElementById("add-input");
const createImage = document.createElement('img');
const createUl = document.createElement('ul');
const createDiv = document.createElement('div');

createDiv.setAttribute('class','listDiv');
createUl.setAttribute('class','listUl');


textInput.addEventListener('keyup', () => {
    const value =  textInput.value.toUpperCase();
    if (value ===""|| value ===" "){
        deleteChild(createUl);
        return ;
    }else{
    form.appendChild(createDiv);
    console.log("jamal");
    createDiv.appendChild(createUl);
    const result = xhrRequest((response) => {
        console.log(value);
        const result = filterAutoComlete(response, value);
        deleteChild(createUl);
        result.forEach(element =>{
            const createLi = document.createElement('li');
            createUl.appendChild(createLi);
            createLi.textContent=element;
            createLi.setAttribute('class','listLi');
        })
    
        
    })

    }

});
let deleteChild = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }