const express = require('express');
const { mongoose } = require('mongoose');
const {MONGO_URI} = require('./secret');
const app = express();
const orderRouter = require('./routes/orderRouter');
const bidRouter = require('./routes/bidRouter');

//DB Connection
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err.message)
})

//MIDDLEWARES
app.use(express.json())


//Routes
app.use('/orders',orderRouter);
app.use('/orders',bidRouter);


//Check Route
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to Server."
    })
})

app.listen(8000,()=>{
    console.log("Server Started");
})