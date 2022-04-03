import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bg-[url(https://static.wixstatic.com/media/35bc85_999c70067cd24adf9483599551c8bc6a~mv2.jpg/v1/fill/w_980,h_746,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/35bc85_999c70067cd24adf9483599551c8bc6a~mv2.jpg)] h-[88vh] w-[100vw] bg-cover bg-center bg-no-repeat p-8 pr-[50%]'>
            <div className='text-white font-bold text-7xl'>YOUR MOST RELIABLE TRUCKING PARTNER</div>
            <div>
                <br/>
                <br/>
                <Link to="/order">
                <button className='m-4 py-3 text-xl rounded-2xl w-60 bg-green-500 text-white font-bold '>Place Order</button>
                </Link>
                <Link to="/order">
                <button className='m-4 py-3 text-xl rounded-2xl w-60 bg-green-500 text-white font-bold '>Place Bid</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
