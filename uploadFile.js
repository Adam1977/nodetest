const express = require('express');
const app = express();
const fs = require("fs");

const bodyParser = require('body-parser');
const multer  = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/uploadFile.html', function (req, res) {
    res.sendFile( __dirname + "/" + "uploadFile.html" );
});

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息
    console.log(__dirname);  // 上传的文件信息

    const des_file = __dirname + "/public/uploadImg/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
                return
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
});

app.listen(8081, function () {
    console.log("应用实例，访问地址为 http://localhost:8081")
});
