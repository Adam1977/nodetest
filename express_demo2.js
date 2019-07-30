const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/public', express.static('public'));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get('/', function (req, res) {
    console.log('主页get请求成功了');
    let data = {
        pic: 'http://localhost:8080/public/img/Snipaste_2019-07-23_11-58-34.png'
    };
    res.send(JSON.stringify(data));
});
app.post('/', urlencodedParser, function (req, res) {
    console.log('主页post请求成功了');
    res.send('index post');
});
app.post('/del_user', function (req, res) {
    console.log('del_user响应DELETE请求');
    res.send('删除页面');
});
app.get('/list_user', function (req, res) {
    console.log('list_user响应获取用户');
    res.send('获取用户');
});
app.listen(8080, function () {
    console.log('启动服务：http://localhost:8080');
});
