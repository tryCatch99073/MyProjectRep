var jobDao = require('../dao/job_dao')
var express = require('express')
var router = express.Router() // 创建一个路由


router.get('/job/search',function (req , res) {
    var key = req.query.k ;
    if(key === 'undefined'){
        key = undefined
    }
    console.log(key)
    const reg = new RegExp(key, 'i') //不区分大小写
    const result = jobDao.find(
        {
            $or : [ //多条件，数组
                {name : {$regex : reg}},
                {city : {$regex : reg}},
                {type : {$regex : reg}}
            ]
        }
    ).then(function (data) {
        res.send(data)
    })
})

router.post('/job/add',function (req , res) {
    new jobDao(req.body).save()
    res.send({success:true,msg:'添加成功'})
})

router.get('/job/del',function (req , res) {
    var id = req.query.i
    jobDao.findByIdAndRemove(id,function (data) {
        res.send('删除成功')
    })
})






module.exports = router