var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var StrokeSchema = new Schema({
    city:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
});

var StrokeDao = mongoose.model('Stroke', StrokeSchema)


module.exports = StrokeDao