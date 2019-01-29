// const url = "../../src/animal.json";


const xhr = new XMLHttpRequest();

function xhrRequest(method, url, callback){
    xhr.onreadystatechange= () =>{

        if(xhr.readyState === 4  && xhr.status === 200){
            let response = JSON.parse(xhr.responseText);
            callback(response);
            // const result = Object.keys(response);
            // console.log(result);
        }

    }
    xhr.open("GET",url);
    xhr.send();

}

// module.exports=xhrRequest;



