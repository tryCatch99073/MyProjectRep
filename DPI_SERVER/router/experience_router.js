var experience_dao = require('../dao/experience_dao')
var express = require('express')
var router = express.Router() // 创建一个路由


router.get('/exp/get',function (req , res) {
    experience_dao.findOne({userid:req.query.i}).then(function (data) {
        res.send(data)
    })
})

router.post('/exp/up',function (req , res) {
    experience_dao.findOneAndRemove({userid:req.body.userid}).then(function () {
        console.log(req.body)
        new experience_dao(req.body).save().then(function (data) {
            res.send({success:true,msg:'修改成功'})
        })
    })
})



module.exports = router