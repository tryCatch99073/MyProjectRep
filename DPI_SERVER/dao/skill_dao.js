var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var SkillSchema= new Schema({
    userid:{
        type:String
    },
    type:{
        type:String
    },
    name:{
        type:String
    },
    degree:{
        type:String
    }
});
var skillDao = mongoose.model('Skill', SkillSchema)


module.exports = skillDao