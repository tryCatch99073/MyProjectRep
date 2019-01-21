var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var ProjectSchema= new Schema({

    userid:{
        type:String
    },
    filename:{
        type:String
    },
    projectdesc:{
        type:String
    }

});
var ProjectDao = mongoose.model('Project', ProjectSchema)


module.exports = ProjectDao