const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*'});
    let params = url.parse(req.url, true).query;
    console.log('params-----', params)
    // res.write('网站名：' + params.name + '\n');
    // res.write('url：' + params.url);
    res.write(JSON.stringify(params));
    res.end();
}).listen(3001);
console.log('Server by http://localhost:3001');
