function xhrRequest(url,method,callback){
    const xhr = new XMLHttpRequest();
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
    xhr.open(method,url);
    xhr.send();

}




