var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var ProjectexperienceSchema = new Schema({
    userid:{
        type:String
    }, projectname:{
        type:String
    },begintime:{
        type:String
    },endtime:{
        type:String
    },desc:{
        type:String
    },exem:{
        type:String
    },result:{
        type:String
    }
});
var projectexperienceDao = mongoose.model('Projectexperience', ProjectexperienceSchema)


module.exports = projectexperienceDao