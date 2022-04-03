const moongose = require('mongoose');

const bidSchema = new moongose.Schema({
    price:{
        type:Number,
        required:[true,"Price is required."]
    }
},{timestamps:true});

const bidModel = new moongose.model('bidModel',bidSchema);

module.exports = bidModel;