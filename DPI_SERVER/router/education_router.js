var education_dao = require('../dao/education_dao')
var express = require('express')
var router = express.Router() // 创建一个路由



router.get('/edu/get',function (req , res) {
    education_dao.findOne({userid:req.query.i}).then(function (data) {
        res.send(data)
    })
})

router.post('/edu/up',function ( req , res) {
    education_dao.findOneAndRemove({userid:req.body.userid}).then(function () {
        console.log(req.body)
        new education_dao(req.body).save().then(function (data) {
            res.send({success:true,msg:'修改成功'})
        })
    })
})



module.exports = router