const express = require('express');
const url = require('url');
const querystring = require('querystring');
const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/getInfo', function (req, res) {
    let data = url.parse(req.url, true).query;
    data.code = '0000';
    data.msg = 'success';
    res.send(JSON.stringify(data));
});
app.post('/postAdd', function (req, res) {
    let str = '';
    req.on('data', function (chunk) {
        str += chunk;
        console.log('str---', str);
    });
    req.on('end', function () {
        let data = {}
        if (str.includes('{')) {
            // axios请求需要将字符串对象转换成对象
            data = JSON.parse(str);
        } else {
            // ajax请求需用querystring转换
            data = querystring.parse(str.toString());
        }
        data.code = '0000';
        data.msg = 'success';
        console.log('data-------', data);
        res.send(JSON.stringify(data));
    });
});
app.listen(8080);
