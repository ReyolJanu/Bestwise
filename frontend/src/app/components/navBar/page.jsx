import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { MdOutlineShoppingCart } from "react-icons/md";


function Navbar() {
  return (
    <div className='flex w-full items-center h-[80px] sticky top-0 z-50 bg-[#F8F8F8]  shadow-[0_1px_0_rgba(0,0,0,0.1)]'>
      <div className=' w-[20%]'><div className='relative'><Image src={logo} alt='Logo' /></div></div>
      <div className=' w-[80%] flex justify-end items-center'>
        <ul className='flex items-center gap-[30px] text-[18px]'>
            <li>Services</li>
            <li>Gift Combo</li>
            <li>About Us</li>
            <li>Services</li>
            <li><MdOutlineShoppingCart /></li>
            <div className='hidden justify-center items-center border-2 border-[#822BE2] rounded-full h-[50px] w-[50px]'>profile</div>
            <li className='flex'>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
