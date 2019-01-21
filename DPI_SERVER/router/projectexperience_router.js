var projectexperience_dao = require('../dao/projectexperience_dao')
var express = require('express')
var router = express.Router() // 创建一个路由

router.get('/pexp/get',function ( req  , res) {
    projectexperience_dao.findOne({userid:req.query.i}).then(function (data) {
        res.send(data)
    })
})

router.post('/pexp/up',function ( req , res) {
    projectexperience_dao.findOneAndRemove({userid:req.body.userid}).then(function () {
        console.log(req.body)
        new projectexperience_dao(req.body).save().then(function (data) {
            res.send({success:true,msg:'修改成功'})
        })
    })
})



module.exports = router