const express = require('express');
const app = express();
const fs = require('fs');
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next();
});
app.get('/:id', function (req, res) {
    fs.readFile(`${__dirname}/users.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        // let user = data['user' + req.params.id];
        // res.end(JSON.stringify(user));
        delete data["user" + req.params.id];
        res.end(JSON.stringify(data));
    })
});
app.listen(8080, function () {
    console.log('http://localhost:8080')
});
