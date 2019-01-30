const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const handelHomePage = (request, response, endPoint) => {
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

const handelResultPage = (request, response) => {
    const filePathResult = path.join(__dirname, 'result.json');
    fs.readFile(filePathResult, (error, file) => {
        if (error) {
            response.writeHead(500, {
                'content-type': 'text/html'
            });
            response.end('server error');
        } else {
            response.writeHead(200, {
                'content-type': 'application/json'
            });
            response.end(file);
        }
    })
}

const handelSearchPage = (request, response) => {
    const filePathSearch = path.join(__dirname, "animal.json");
    const filePathResult = path.join(__dirname, "result.json");
    let allData = '';
    request.on('data', chunkData => {
        allData += chunkData;
    });
    request.on('end', () => {
        fs.readFile(filePathSearch, (error, file) => {
            const parseData = queryString.parse(allData);
            const searchValue = parseData.description;
            const animalFile = JSON.parse(file);
            const filterResult = JSON.stringify(filterFile(animalFile, searchValue));
            fs.writeFile(filePathResult, filterResult, err => {
                response.writeHead(500, { 'content-type': 'text/html' });
                response.end('server Error');
            })
        })
        response.writeHead(302, {
            'location': '/'
        });
        response.end();
    });
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

const filterFile = (file, data) => {
    let filterData = {};
    for (let key in file) {
        if (key.indexOf(data) !== -1) {
            filterData[key] = file[key];
        }
    }
    return filterData;
}
module.exports = {
    handelHomePage,
    handelPublicFiles,
    handelNotFound,
    handelResultPage,
    handelSearchPage,
    handelAnimalPage
}