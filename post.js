const http = require('http');
const querystring = require('querystring');
let posthtml = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
        console.log('body1-------', body)
    })
    req.on('end', function () {
        body = querystring.parse(body);
        console.log('body2-------', body)
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8', 'Access-Control-Allow-Origin': '*'});
        if (body.name && body.url) {
            res.write(JSON.stringify(body))
        } else {
            // res.write(posthtml)
            res.write('{}')
        }
        res.end();
    })
}).listen(3001);
