var noticyDao  =  require('../dao/noticy_dao')
var express = require('express')
var router = express.Router() // 创建一个路由
require('../utils/Date')


router.get('/not/new',function (req , res) {
    noticyDao.find().then(function (data) {
         res.send(data)
    })
})

router.post('/not/add',function (req , res) {
    var body  =  req.body
    body.time = new Date().Format("yyyy-MM-dd");
    console.log(body)
    new noticyDao(body).save().then(function (data) {
        res.send({success:true,msg:'添加公告成功'})
    }).catch(function (err) {
        res.send({success:false,msg:'添加公告失败'})
    })
})

router.get('/not/del',function (req , res) {
   var i  =  req.query.i
    noticyDao.findByIdAndRemove(i,function (data) {
        res.send({success:true,msg:'删除成功'})
    })
})



module.exports = router