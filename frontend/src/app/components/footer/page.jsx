import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <div className='flex w-full bg-gray-200 mt-[50px] pl-[50px] pr-[50px] pb-[20px] pt-[50px]'>
        <div className='w-[25%] '> <div className='w-[300px] relative'><Image src={logo} alt='Logo' /></div></div>
        <div className='w-[25%] flex-col space-y-[10px]'>
            <p className='font-semibold text-[18px]'>Social media</p>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><FaInstagram /></span><p>Instagram</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><FaFacebookF /></span><p>Facebook</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><FaWhatsapp /></span><p>Whatsapp</p></div>
        </div>
        <div className='w-[25%] flex-col space-y-[10px]'>
            <p className='font-semibold text-[18px]'>Quick Links</p>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><p>Collabrative Gifts</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><p>Custermizable gift</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><p>Surprice Gift</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><p>Contact Us</p></div>
        </div>
        <div className='w-[25%]  flex-col space-y-[10px]'>
            <p className='font-semibold text-[18px]'>Social media</p>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><IoLocationOutline /></span><p>Location</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><TfiEmail /></span><p>email@gamilcom</p></div>
            <div className='flex gap-[15px] items-center text-[#5C5C5C] text-[18px] pl-[20px]'><span><MdOutlineLocalPhone /></span><p>0703892890</p></div>
        </div>
    </div>
    <div className='bg-gray-200   text-[#822BE2] font-semibold flex w-full justify-center items-center pt-[20px] pb-[20px] gap-[10px]'><FaRegCopyright /> all copy rights received 2025</div>
    </div>
  )
}

export default Footer
