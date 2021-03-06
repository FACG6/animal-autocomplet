const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const handelHomePage = (request, response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, {
                'content-type': 'text/html'
            });
            response.end('server error');
        } else {
            response.writeHead(200, {
                'content-type': 'text/html'
            });
            response.end(file);
        }
    });
}

const handelPublicFiles = (request, response, endPoint) => {
    const extention = path.extname(endPoint).substr(1);
    const contentType = {
        js: "text/javascript",
        css: "text/css",
        html: "text/html",
        json: "application/json",
        ico: "image/x-icon"
    }
    const fileName = endPoint.split('/');
    const filePath = path.join(__dirname, '..', ...fileName);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, {
                'content-type': 'text/html'
            });
            response.end('server error');
        } else {
            response.writeHead(200, {
                'content-type': contentType[extention]
            });
            response.end(file);
        }
    })

}

const handelNotFound = (request, response) => {
    response.writeHead(404, {
        'content-type': 'text/html'
    });
    response.end('<h1>page not found</h1>');
}

const handelAnimalPage = (request, response) => {
    const pathFile = path.join(__dirname, "animal.json")
    fs.readFile(pathFile, (error, file) => {
        if (error) {
            response.writeHead(500, { 'content-type': 'text/html' });
            response.end('server Error');
        } else {
            response.writeHead(200, { "content-Type": "application/json" })
            response.end(file);
        }
    })
}
module.exports = {
    handelHomePage,
    handelPublicFiles,
    handelNotFound,
    handelAnimalPage
}