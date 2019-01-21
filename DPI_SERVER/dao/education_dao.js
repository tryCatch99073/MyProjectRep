var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/DJI')

var educationSchema = new Schema({
    userid:{
        type:String
    },schoolname:{
        type:String
    },edu:{
        type:String
    },pro:{
        type:String
    },begintime:{
        type:String
    },endtime:{
        type:String
    }
});

var eduction_dao = mongoose.model('Educationinfo', educationSchema)


module.exports = eduction_dao