const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req --> ', req);
    console.log('res --> ', res);
})

// console.log(http);
// console.log(server);