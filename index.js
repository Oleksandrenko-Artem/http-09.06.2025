const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const loadFile = (path) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
    if (req.url === '/views/style.css') {
        loadFile('./views/style.css')
    }
    if (req.method === 'GET') {
        switch (req.url) {
            case '/':
                loadFile('./views/index.html');
            break;
            case '/about':
                loadFile('./views/about.html');
            break;
            case '/blog':
                loadFile('./views/blog.html');
            break;
            case '/contacts':
                loadFile('./views/contacts.html');
            break;
        default:
            case '/404':
                loadFile('./views/404.html');
            break;
        }
    }
    if (req.method === 'POST') {
        switch (req.url) {
            case '/users':
                // chunk
                let jsonString = '';
                req.on('data', (chunk) => {
                    jsonString += chunk;
                });
                req.on('end', () => {
                    console.log(jsonString);
                    res.end('data receive');
                });
                break;
        
            default:
                res.end('not found');
                break;
        }
    }
    // console.log('req --> ', req);
    // console.log('res --> ', res);
    // console.log('req method --> ', req.method);
    // console.log('req url --> ', req.url);
    // res.end('<h1 style = "color: red">hello from server!!!</h1>');
});

const port = 3000;

server.listen(port, () => {
    const startDate = new Date().toLocaleString();
    console.log(`server start at ${startDate} and listen port ${port}`);
});