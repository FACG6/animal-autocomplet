const url = "../../src/animal.json";


const xhr = new XMLHttpRequest();

function xhrRequest(method, url, callback){
    xhr.onreadystatechange= () =>{

        if(xhr.readyState === 4  && xhr.status === 200){
            let response = xhr.responseText;
            callback(response);
            console.log(response.url.);
        }

    }
    xhr.open("GET",url);
    xhr.send();

}

function cb(){
    console.log("ahmed");
}
xhrRequest("Get",url,cb);