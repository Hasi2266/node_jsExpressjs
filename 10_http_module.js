//npm do 3 things
// 1 .reuse our own code in other project
// 2. use code written by other developer
// 3 . shres owr own solutions with other developers


//package as stored as depedency

const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('Welcome to home page');
       
    }
    if(req.url === '/about'){
        res.end('About page');
    }

    res.end(
        'OOps there is not page'
    )
    // res.write('Welcome to home page');
    // res.end();
})

server.listen(5000)