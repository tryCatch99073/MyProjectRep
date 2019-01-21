var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var userInfoSchema = new Schema({
    userid:{
        type:String
    },
    name:{
        type:String,
    },
    sex:{
        type:String
    },
    country:{
        type:String
    },
    bloodtype:{
        type:String
    },
    birthday:{
        type:String
    },
    edu:{
        type:String
    },
    workyear:{
        type:String
    },
    phone:{
        type:String
    },
    tempphone:{
        type:String
    },
    email:{
        type:String
    },
    selfdesc:{
        type:String
    }
});
var userInfoDao = mongoose.model('Userinfo', userInfoSchema)


module.exports = userInfoDao