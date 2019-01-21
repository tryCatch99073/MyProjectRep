var strokeDao  =  require('../dao/stroke_dao')
var express = require('express')
var router = express.Router() // 创建一个路由


router.get('/str/find',function (req , res) {
    var type = {}
    if(req.query.t ){
        type = {'type':req.query.t}
    }
    strokeDao.find(type).then(function (data) {
        res.send(data)
    })
})

router.post('/str/add',function (req , res) {
    new strokeDao (req.body).save ()
    res.send('添加成功')
})

router.get('/str/del',function (req , res) {
    var id = req.query.i
    console.log(id)
    strokeDao.findByIdAndRemove(id).then(function (data) {
        res.send('删除成功')
    })
})




module.exports = router