var collectDao  =  require('../dao/collect_dao')
var advertiseDao = require('../dao/advertise_dao')
var express = require('express')
var router = express.Router() // 创建一个路由




router.get('/col/col',function (req , res) {
    var uid = req.query.uid
    var jid = req.query.jid
    new collectDao ({userid:uid,jobid:jid,_id:new Date().getTime()}).save().catch(function (err) {
        console.log(err)
    })
    res.send({success:true,msg:'收藏成功'})
})


router.get('/col/findbyu',function ( req , res) {
    var uid =  req.query.i
    collectDao.find({userid:uid}).then(function (data) {
        var arr = []
        for (i=0;i<data.length;i++){
            arr.push(data[i].jobid)
        }
        console.log(arr)
        advertiseDao.find({_id:{$in:arr}}).then(function (data) {
            res.send(data)
        })
    })
})






module.exports = router