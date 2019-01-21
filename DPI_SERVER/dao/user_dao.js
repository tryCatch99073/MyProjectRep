var mongoose = require('mongoose')



var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/DJI')

var UserSchema = new Schema({
    username:{
        type:String,
        required:true, //必须要有值
    },
    headimg:{
        type:String
    },
    password:{
        type:String,
        required:true, //必须要有值
    }
});
var userDao = mongoose.model('User', UserSchema)


module.exports = userDao