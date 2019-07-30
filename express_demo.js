const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('hello express');
    console.log('req.hostname----------', req.hostname)
    console.log('req.originalUrl---------', req.originalUrl)
});
app.listen(8080, function () {
    console.log('address: http://localhost:8080');
})
