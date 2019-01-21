var user_info_dao = require('../dao/user_info_dao')
var express = require('express')
var router = express.Router() // 创建一个路由


router.get('/ui/get',function ( req , res) {

    var i =  req.query.i
    user_info_dao.findOne({userid:i}).then(function (data) {
        res.send(data)
    })

})

router.post('/ui/up',function ( req , res) {
    user_info_dao.findOneAndRemove({userid:req.body.userid}).then(function () {
        console.log(req.body)
        new user_info_dao(req.body).save().then(function (data) {
            res.send({success:true,msg:'修改成功'})
        })
    })
})


module.exports = router