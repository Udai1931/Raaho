const bidModel = require("../models/bidModel");
const orderModel = require("../models/orderModel");

module.exports.createBid = async function(req,res){
    try{    
        let {price} = req.body;
        if(!price){
            throw new Error("Price is required.");
        }
        let order = await orderModel.findById(req.params.orderId);
        if(!order){
            throw new Error("Order ID not found.");
        }
        if((order.basePrice > price) || (order.maxPrice < price)){
            throw new Error("Price must be greater than base price ans Smaller than max price");
        }
        let timeLimit = new Date(order.createdAt).getTime();
        timeLimit += order.timer * 60 * 1000;
        let currentTime = new Date().getTime();
        if(timeLimit < currentTime){
            throw new Error("Time limit exceeded.");
        }
        let bid = await bidModel.create({price});
        order.bids.push(bid);

        if(order.topBidPrice < price){
            order.topBidPrice = price;
            order.topBid = bid;
        }
        
        order.save();
        res.json({
            message:"Bid placed successfully.",
            data:bid
        })
    }catch(err){
        res.json({
            message:err.message
        })
    }
}