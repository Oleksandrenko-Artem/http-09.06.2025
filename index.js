const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end('home page');
            break;
        case '/about':
            res.end('about page');
            break;
        case '/blog':
            res.end('blog page');
            break;
        case '/contacts':
            res.end('contacts page');
            break;
        default:
            res.end('404 - not found!')
            break;
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