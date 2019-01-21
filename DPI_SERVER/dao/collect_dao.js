var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var CollectSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    jobid:{
        type:String,
        required:true,
    },
    _id:{
        type:String,
        required:true
    }
});
var CollectDao = mongoose.model('Collect', CollectSchema)


module.exports = CollectDao