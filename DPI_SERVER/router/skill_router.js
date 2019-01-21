var skill_dao = require('../dao/skill_dao')
var express = require('express')
var router = express.Router() // 创建一个路由

router.get('/ski/get',function ( req  , res) {
    var i = req.query.i
    skill_dao.find({userid:i}).then(function (data) {
        res.send(data)
    })
})

router.post('/ski/add',function ( req , res) {
    new skill_dao(req.body).save()
    res.send({success:true,msg:'添加成功'})
})

router.post('/ski/up',function ( req , res) {

})

router.get('/ski/del',function (req , res) {
    var id = req.query.i
    skill_dao.findByIdAndRemove(id).then(function (data) {
        res.send({success:true,msg:'删除成功'})
    })
})


module.exports = router