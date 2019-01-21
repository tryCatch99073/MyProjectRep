var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var ResumeSchema= new Schema({

    jibenxinxi:{
        type:Object
    },
    jiaoyubeijing:{
        type:Object
    },
    gongzuojingli:{
        type:Object
    },
    xiangmujingli:{
        type:Object
    },
    gerenjineng:{
        type:Array
    },
    fujianzuopin:{
        type:Array
    },
    headimg:{
        type:String
    },
    desc:{
        type:String
    },
    userid:{
        type:String
    }


});
var ResumeDao = mongoose.model('Resume', ResumeSchema)


module.exports = ResumeDao