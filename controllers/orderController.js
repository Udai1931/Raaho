const orderModel = require("../models/orderModel");

module.exports.createOrder = async function(req,res){
    try{
        let {origin,destination,vehicleType,basePrice,maxPrice} = req.body;
        if(!origin || !destination || !vehicleType || !basePrice || !maxPrice){
            throw new Error("All fields are required.");
        }
        let order = await orderModel.create({origin,destination,vehicleType,basePrice,maxPrice});
        res.json({
            message:"Order created successfully.",
            data:order
        })
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.getAllBids = async function(req,res){
    try{
        let orderId = req.params.orderId;
        if(orderId){
            let order = await orderModel.findById(orderId);
            if(!order){
                throw new Error("Order not found.");
            }
            await order.populate("bids") && await order.populate("topBid");
            let bids = order.bids;

            bids.sort((a,b)=>{
                if(a.price == b.price){
                    a.createdAt - b.createdAt;
                }else{
                    return b.price - a.price;
                }
            })

            res.json({
                message:"Bids fetched successfully.",
                topBid : order.topBid,
                topFive : bids.slice(0,5),
                leftBids : bids.slice(5)
            })
        }else{
            throw new Error("Order Id is required.");
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}