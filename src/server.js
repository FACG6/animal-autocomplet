const http = require('http');
const router = require('./router.js');
const server = http.createServer(router);
const port = 5000;
server.listen(port, () => {
    console.log(`server is running in localhost:${port}`);
});