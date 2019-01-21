var project_dao = require('../dao/project_dao')
var express = require('express')
var router = express.Router() // 创建一个路由


router.post('/pro/add',function (req , res) {
    new project_dao (req.body).save().then(function (data) {
        res.send({
            success:true,
            msg:'附件信息上传成功'
        })
    })
})

router.get('/pro/find',function (req , res) {
    project_dao.find({userid:req.query.i}).then(function (data) {
        console.log(data)
        res.send(data)
    })
})

router.get('/pro/del',function (req , res) {
    var id =  req.query.i
    console.log(id)
    project_dao.findByIdAndRemove(id).then(function (data) {
        res.send({success:true,msg:'删除成功'})
    })
})

module.exports = router