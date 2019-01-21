var userDao = require('../dao/user_dao')
var collectDao = require('../dao/collect_dao')

var express = require('express')
var router = express.Router() // 创建一个路由



router.post('/lgn',function (req , res) {
    var pars =  req.body
    console.log(pars)
    userDao.findOne(pars).then(function (data) {
        console.log('Ht')
        if (data) {
            res.send({success:true,msg:'登录成功',user:data})
            //登录成功
        }else {
            res.send({success:false,msg:'账号或者密码错误'})
        }
    })

})

router.post('/reg',function (req , res) {
    var pars =  req.body
    new userDao (pars).save().then(function (data) {
       var ui =  data._id
        var ent = {userid:ui,jobs:[]}
        new collectDao (ent).save()
    })

    res.send({success:true,msg:'注册成功'})


})


router.get('/usr/find',function (req , res) {
    userDao.find().then(function (data) {
        res.send(data)
    })
})

router.get('/usr/del',function (req , res) {
    var id = req.query.i
    console.log(id)
    userDao.findByIdAndRemove(id,function (data) {
        res.send('删除成功')
    })
})

router.get('/usr/uphead',function (req  , res) {
    var i = req.query.i
    var n = req.query.n
    console.log(i+":"+n)
    userDao.findByIdAndUpdate(i,{headimg:n},function (d) {
        userDao.findById(i).then(function (data) {
            res.send(data)
        })
    })

})


module.exports =  router