const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    origin:{
        type:String,
        required:[true,"Origin is required."]
    },
    destination:{
        type:String,
        required:[true,"Destination is required."],
        validate:[function(){
            this.origin !== this.destination;
        },"Origin and Destination can't be same."]
    },
    vehicleType:{
        type:String,
        required:[true,"Vehicle Type is required."]
    },
    basePrice:{
        type:Number,
        required:[true,"Base Price is required."]
    },
    maxPrice:{
        type:Number,
        required:[true,"Max Price is required."]
    },
    bids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bidModel"
    }],
    timer:{
        type:Number,
        default:120  
    },
    topBidPrice:{
        type:Number,
        default:0
    },
    topBid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bidModel"
    }
},{timestamps:true});

const orderModel = new mongoose.model('orderModel',orderSchema);

module.exports = orderModel