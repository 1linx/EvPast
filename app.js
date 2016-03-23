var http = require('http');

console.log('Running...');


http.createServer(function(req, res) {    
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end("Hello world!\n");
}).listen(1337);