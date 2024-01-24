import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Mask group.svg'

export default function HomeNav() {
    return (
        <div className='mx-5 lg:mx-20 flex justify-between'>
        <a href="/">
            <img src={logo} alt="h" className=''/>
        </a>
            <Link className="text-[#338EF7] pt-7 lg:text-2xl hover:text-white hover:underline transition" to="/" style={{ display: "block" }}>Go Back Home</Link>
        </div>
    )
}
