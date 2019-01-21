var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var ApplySchema = new Schema({
    _id:{
        type:String
    },
    userid:{ //申请人
        type:String,
        required:true
    },
    jobid:{ //申请职位
        type:String,
        required:true
    },
    status:{ //申请状态
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    time : { //申请时间
        type:String,
        required:true
    },
    msg : {  //消息
        type:String,
    },
    jobname:{
        type:String,
        required:true
    },
    username:{
        type:String
    }

});
var ApplyDao = mongoose.model('Apply', ApplySchema)


module.exports = ApplyDao