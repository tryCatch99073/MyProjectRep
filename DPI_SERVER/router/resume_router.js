var  resume_dao= require('../dao/resume_dao')
var express = require('express')
var router = express.Router() // 创建一个路由

router.post('/rem/add',function (req , res) {

    new resume_dao(req.body).save()
    res.send({successs:true,msg:'添加简历成功'})

})


router.get('/rem/finduser',function (req , res) {
    var userid = req.query.i
    console.log(userid)
    resume_dao.find({userid:userid}).then(function (data) {
        res.send(data)
    })
})

router.get('/rem/findid',function (req , res) {
   var id  =  req.query.i
    resume_dao.findById(id).then(function (data) {
        res.send(data)
    })
})

router.get('/rem/del',function (req , res) {
    var id = req.query.i
    resume_dao.findByIdAndRemove(id).then(function () {
        res.send({success:true,msg:'删除成功'})
    })
})

module.exports = router