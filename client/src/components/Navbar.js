import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='h-[12vh] border-b px-2  md:pl-12 py-2 flex'>
            <Link to="/"><img className='cursor-pointer h-[70px] w-[120px] md:w-[200px]' src="https://static.wixstatic.com/media/35bc85_7c029bf7166341f5b8f542b7a6deddf8~mv2.png/v1/crop/x_0,y_59,w_1080,h_314/fill/w_211,h_61,al_c,usm_0.66_1.00_0.01,enc_auto/Logo_web.png" /></Link>
            <div className='ml-auto flex md:px-32 items-center  space-x-4 md:space-x-28 md:text-lg pointer'>
                {/* <div>Home</div> */}
                <Link to="/order">
                    <div className='hover:font-bold hover:text-green-500 cursor-pointer'>Place Order</div>
                </Link>
                <Link to="/order">
                    <div className='hover:font-bold hover:text-green-500 cursor-pointer'>Place Bid</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
