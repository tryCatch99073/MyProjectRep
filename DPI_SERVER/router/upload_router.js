var express = require('express')
var router = express.Router() // 创建一个路由
var fs = require("fs")

// 上传头像
router.post('/head_upload', function (req, res) {
    console.log(req.files[0]);  // 上传的文件信息

    var oname = req.files[0].originalname

    var newname = new Date().getTime() +  oname.substring(oname.lastIndexOf("."),oname.length)

    var des_file =  "./public/heads/" +newname
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( 1+err );
                response = {
                    message:'头像上传失败',
                    success:false
                };
                res.end(JSON.stringify(response) );
            }else{
                response = {
                    message:'头像上传成功',
                    filename:newname,
                    success:true
                };
                res.end(JSON.stringify(response) );
            }

        });
    });
})

//上传项目
router.post('/project_upload', function (req, res) {


    var df =  req.body.deletefilename ;

    fs.unlink('./public/files/'+df,function (err) {
        if(err) console.log(err);
        console.log(df+'文件删除成功')
    })

    console.log();  // 上传的文件信息

    var oname = req.files[0].originalname

    var newname = new Date().getTime() +  oname.substring(oname.lastIndexOf("."),oname.length)

    var des_file =  "./public/files/" +newname
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( 1+err );
                response = {
                    message:'文件上传失败',
                    success:false
                };
                res.end(JSON.stringify(response) );
            }else{
                response = {
                    message:'文件上传成功',
                    filename:newname,
                    success:true
                };
                res.end(JSON.stringify(response) );
            }

        });
    });
})



module.exports = router