import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Arrow = () => {
    return (

        <div className="hidden md:flex items-center justify-center pb-12">
            <a href="#" className='text-purple-500 text-2xl'><FaChevronDown></FaChevronDown></a>
        </div>

    )
}

export default Arrow