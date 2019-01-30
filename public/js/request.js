
function xhrRequestSubmite(method, url, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange= () =>{

        if(xhr.readyState === 4){
            if(xhr.status === 200){
            let response = JSON.parse(xhr.responseText);
            callback(response);
            }else{
                return "error message";
            }
        }

    }
    xhr.open("GET",'./result');
    xhr.send();

}
function xhrRequestKeyUp(callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange= () =>{

        if(xhr.readyState === 4){
            if(xhr.status === 200){
            let response = JSON.parse(xhr.responseText);
            callback(response);
            }else{
                return "error message";
            }
        }

    }
    xhr.open("GET",'./animal');
    xhr.send();

}




