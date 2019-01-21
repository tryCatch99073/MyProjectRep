var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var experienceSchema = new Schema({

    userid:{
        type:String
    },compname:{
        type:String
    },dept:{
        type:String
    },place:{
        type:String
    },report:{
        type:String
    },position:{
        type:String
    },subor:{
        type:String
    },begintime:{
        type:String
    },endtime:{
        type:String
    }, achie:{
        type:String
    },duty:{
        type:String
    },reason:{
        type:String
    }

});
var experienceDao = mongoose.model('Experience', experienceSchema)


module.exports = experienceDao