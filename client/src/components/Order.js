import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Order() {

    const [orders, setOrders] = useState([])
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState();
    const [basePrice, setBasePrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [truckType, setTruckType] = useState("");

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async() =>{
        let result = await axios.get("/orders")
        console.log(result.data)
        setOrders([...result.data.data])
    }

    const placeOrder = async () => {
        let result = await axios.post("/orders", {
            origin,
            destination,
            basePrice,
            maxPrice,
            vehicleType: truckType
        })
        console.log(result.data)
        alert(result.data.message)
        if (result.data.data) {
            setOrigin("")
            setDestination("")
            setBasePrice(0)
            setMaxPrice(0)
            setTruckType("")

        }
        setOrders([...orders, result.data.data])
    }

    return (
        <div className='text-center'>
            <div>

                <div className='h-full flex flex-col justify-center items-center'>
                    <div>
                        Origin:
                        <input value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" className='m-2 border-b outline-none' />
                    </div>
                    <div>
                        Destination:
                        <input value={destination} onChange={(e) => setDestination(e.target.value)} type="text" className='m-2 border-b outline-none' />
                    </div>
                    <div>
                        Truck Type:
                        <input value={truckType} onChange={(e) => setTruckType(e.target.value)} type="text" className='m-2 border-b outline-none' />
                    </div>
                    <div>
                        Base Price:
                        <input value={basePrice} onChange={(e) => setBasePrice(e.target.value)} type="number" className='m-2 border-b outline-none' />
                    </div>
                    <div>
                        Max Price:
                        <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} type="number" className='m-2 border-b outline-none' />
                    </div>
                    <button onClick={placeOrder} className='text-green-500 font-bold text-2xl py-2 px-2 rounded-lg border-2 border-green-500 hover:bg-green-500 hover:text-white my-4'>Place a Order</button>
                </div>
            </div>
            <hr className='mt-4' />
            <h1 className='mt-4 text-3xl'>All Orders</h1>
            <div className='orders mt-4 flex flex-col justify-center items-center'>
                {
                    orders.map((order) => (
                        <div key={order._id} className='w-[90%] h-[4rem] border-2 flex flex-row justify-between items-center px-4 my-2'>
                            <div>From : {order.origin}</div>
                            <div>To : {order.destination}</div>
                            <div>Start : {order.basePrice}</div>
                            <div>End : {order.maxPrice}</div>
                            <div>Top Bid : {order.topBidPrice}</div>
                            <Link to={`/bid/${order._id}`}>
                                <div className='bg-green-500 cursor-pointer py-1 px-2 rounded text-white'>Place Bid</div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Order
