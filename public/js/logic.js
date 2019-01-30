const xhrRequest = (method,url,callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            // console.log(response);
            callback(response);
        }
    }
    xhr.open(method,url,true);
    xhr.send();

}




