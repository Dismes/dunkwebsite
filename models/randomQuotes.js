var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var user = new Schema({
    name:{
        type:String,
        required:true
    },
    quote:{
        type:String,
        required:true,
    },
    id:{
        id: Schema.Types.ObjectId,
    }
});

module.exports = {user}