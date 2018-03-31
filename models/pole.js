var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var pole = new Schema({
    pole:{
        type:String,
        required:true
    },
    id:{
        id: Schema.Types.ObjectId,
    }
})

module.exports = {pole}