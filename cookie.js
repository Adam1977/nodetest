const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const util = require('util');

app.use(cookieParser());
app.get('/', function (req, res) {
    console.log('cookie is:', util.inspect(req.cookies));
});
app.listen(8080);
