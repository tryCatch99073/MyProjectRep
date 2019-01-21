var advertiseDao = require('../dao/advertise_dao');
var express = require('express')
var router = express.Router() // 创建一个路由


router.get('/adv/find',function (req , res) {
    advertiseDao.find().then(function (data) {
        res.send(data)
    })
})

router.post('/adv/add',function (req , res) {
    // 进行存储
    new advertiseDao (req.body).save()
    res.send({success:true,msg:'添加成功'})
})

router.get('/adv/del',function (req , res) {
    var id = req.query.i ;
    advertiseDao.findByIdAndRemove(id).then(function (data) {
        res.send('删除成功')
    })
})


router.get('/adv/fi',function (req , res) {
    var id = req.query.i
    advertiseDao.findById(id).then(function (data) {
        console.log(data)
        res.send(data)
    })
})




router.get('/adv/find/by',function (req , res) {
    var by = req.query
    var tem = {}
    if(by.city && by.city.length > 0){
       tem.city =  by.city
    }
    if(by.type && by.type.length > 0){
        tem.type = by.type
    }
    if(by.info && by.info.length > 0){
        const reg = new RegExp(by.info, 'i') //不区分大小写
        tem.$or = [ //多条件，数组
            {info : {$regex : reg}}
        ]
    }
    console.log(tem)
    advertiseDao.find(tem).then(function (data) {
        res.send(data)
    })
})




module.exports = router