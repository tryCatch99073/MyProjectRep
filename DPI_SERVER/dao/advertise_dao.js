var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var AdvertiseSchema = new Schema({
    name:{
        type:String,
        required:true, //必须要有值
    },
    type: {
        type: String,
        required: true, //必须要有值
    },
    city:{
        type:String,
        required:true, //必须要有值
    },
    info:{
        type:String,
        required:true, //必须要有值
    },
    date:{
        type:String,
        required:true, //必须要有值
    }

});
var advertiseDao = mongoose.model('Advertise', AdvertiseSchema)


module.exports = advertiseDao