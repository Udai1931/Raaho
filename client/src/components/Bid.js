import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Bid() {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const [bids, setBids] = useState([]);
    const [price,setPrice] = useState(0);

    useEffect(() => {
        getOrder();
        let id = setInterval(() => {
            getOrder();
        }, 4000);
        return () => clearInterval(id);
    }, [])

    const getOrder = async () => {
        let result = await axios.get(`/orders/${orderId}/bids`);
        console.log(result)
        setOrder({ ...result.data.order });
        setBids([...result.data.topFive, ...result.data.leftBids]);
    }

    const placeBid = async() => {
        let result = await axios.post(`/orders/${orderId}/bids`, {
            price
        })
        alert(result.data.message);
        if (result.data.data) {
            setPrice(0)
        }
    }

    return (
        <div className='text-center'>
            <div className='mt-4 flex justify-center items-center'>
                <div className='bg-green-500 text-white w-[90%] h-[4rem] rounded-xl flex justify-between items-center px-4'>
                    <div>From : {order.origin}</div>
                    <div>To : {order.destination}</div>
                    <div>Start : {order.basePrice}</div>
                    <div>End : {order.maxPrice}</div>
                    <div>Top Bid : {order.topBidPrice}</div>
                    {/* <div className='bg-green-500 cursor-pointer py-1 px-2 rounded text-white'>Place Bid</div> */}
                </div>
            </div>
            <hr className='mt-4' />
            <div>
                <div className='h-full flex flex-col justify-center items-center'>
                    <div>
                        Price :
                        <input  value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className='m-2 border-b outline-none' />
                    </div>
                    <button className='text-green-500 font-bold text-2xl py-2 px-2 rounded-lg border-2 border-green-500 hover:bg-green-500 hover:text-white my-4' onClick={placeBid}>Place Bid</button>
                </div>
            </div>
            <hr className='mt-4' />
            <h1 className='mt-4 text-3xl'>All Bids</h1>
            <div className='orders mt-4 flex justify-center items-center flex-col'>
                {
                    bids.map((bid,idx) => (
                        <div key={bid._id} className='w-[90%] h-[4rem] border-2 flex justify-around items-center px-4 my-2'>
                            <div className='text-green-500'>Rank : {idx+1}</div>
                            <div>Bid ID : {bid._id}</div>
                            <div>Price : {bid.price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bid
