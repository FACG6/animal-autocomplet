const divResult = document.querySelector('div');
xhrRequest('get',"../../src/animal.json",(res)=>console.log(Object.keys(res)[0]));
