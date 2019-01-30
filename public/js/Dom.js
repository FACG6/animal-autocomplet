const inputText=document.getElementById("add-input");
// const url ='../../src/animal.json'
inputText.addEventListener('keyup',(event)=>{
   let result= xhrRequest("GET","/animal",(res)=>{
    console.log(Object.keys(res));
   }
   )})