var mongoose = require('mongoose')



var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/DJI')

var JobSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    time:{
      type:String,
      required:true
    }

});
var JobDao = mongoose.model('Job', JobSchema)


module.exports = JobDao