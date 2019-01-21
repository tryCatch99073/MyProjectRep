var apply_dao = require('../dao/apply_dao')
var express = require('express')
var router = express.Router() // 创建一个路由

// 提交申请
router.post('/apl/send',function (req , res) {
    var obj = req.body ;
    obj.status = '请求中'
    obj._id = new Date().getTime()
    new apply_dao (obj).save().then(function (data) {
        res.send({success:true,msg:'申请成功，请静候佳音'})
    })
})

router.get('/apl/finduser',function (req , res) {
    var uid = req.query.i
    apply_dao.find({userid:uid}).then(function (data) {
        res.send(data)
    })
})

router.get('/apl/find',function (req , res) {
    apply_dao.find().then(function (data) {
        res.send(data)
    })
})


router.post('/apl/sendmsg',function (req, res) {
    console.log(req.body)
    apply_dao.findByIdAndUpdate(req.body._id, {$set:{msg:req.body.msg,status:req.body.status}}).then(function (data) {
        res.send({success:true,msg:'发送成功'})
    })
})









module.exports = router