var express = require('express')
var router = express.Router() // 创建一个路由
var fs = require("fs")

router.get('/down/project',function (req , res) {
    var fn = req.query.fn
    fs.readFile('./public/files/'+fn,function (err,data) {
        res.send(data)
    })
})



module.exports = router