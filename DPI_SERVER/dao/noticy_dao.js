var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var NoticySchema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }

});
var NoticyDao = mongoose.model('noticy', NoticySchema)


module.exports = NoticyDao