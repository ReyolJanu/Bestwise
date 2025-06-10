"use client";
import React from 'react'
import Navbar from '../../components/navBar/page'
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import Footer from '../../components/footer/page'

function page() {
    return (
        <>
        <div className='pl-[80px] pr-[80px] flex-col items-center'>
            <Navbar />
            <div className='font-extra-large font-semibold mt-[15px]'> carts (2)</div>

            <div className='flex w-full mt-[15px]'>
                <div className='flex-col w-[65%] items-center'>
                    {/* left side */}
                    <div className='w-full  flex justify-center mb-[50px]'>
                        <div className="relative w-[15%] ">
                            <Image
                                src="/mug.jpg"
                                alt="image"
                                width={130}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className='w-[40%]  flex-col pl-[20px]'>
                            <p className='font-large'>Product name</p>
                            <p className='font-large font-semibold'>Product Price</p>
                            <div>stars</div>
                        </div>
                        <div className='bg-[#D9D9D9] mr-[20px] w-[3px] rounded-full'></div>
                        <div className='w-[45%] flex-col'>
                            <div className=' flex items-center space-x-[15px]'>
                                <p>Quantity</p>
                                <div className='flex justify-center items-center space-x-[10px]'>
                                    <button className='bg-[#D9D9D9] w-[25px] h-[25px] rounded-[5px] flex justify-center items-center'>-</button>
                                    <span className='bg-white border-2 border-[#D9D9D9] w-[45px] h-[45px] rounded-[5px] flex justify-center items-center font-large'>1</span>
                                    <button className='bg-[#D9D9D9] w-[25px] h-[25px] rounded-[5px] flex justify-center items-center'>+</button>
                                </div>
                                <button className='border-2 border-red-500 rounded-full p-[5px] ml-[50px]'><RiDeleteBin6Line className='text-red-500' /></button>
                            </div>
                            <div className='flex space-x-[40px] pt-[20px]'>
                                <span>Price</span> <span className='font-large font-semibold'>US 50.25$</span>
                            </div>
                        </div>
                    </div>
                    {/* ------------- */}
                    <div className='w-full  flex justify-center'>
                        <div className="relative w-[15%] ">
                            <Image
                                src="/mug.jpg"
                                alt="image"
                                width={130}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className='w-[40%]  flex-col pl-[20px]'>
                            <p className='font-large'>Product name</p>
                            <p className='font-large font-semibold'>Product Price</p>
                            <div>stars</div>
                        </div>
                        <div className='bg-[#D9D9D9] mr-[20px] w-[3px] rounded-full'></div>
                        <div className='w-[45%] flex-col'>
                            <div className=' flex items-center space-x-[15px]'>
                                <p>Quantity</p>
                                <div className='flex justify-center items-center space-x-[10px]'>
                                    <button className='bg-[#D9D9D9] w-[25px] h-[25px] rounded-[5px] flex justify-center items-center'>-</button>
                                    <span className='bg-white border-2 border-[#D9D9D9] w-[45px] h-[45px] rounded-[5px] flex justify-center items-center font-large'>1</span>
                                    <button className='bg-[#D9D9D9] w-[25px] h-[25px] rounded-[5px] flex justify-center items-center'>+</button>
                                </div>
                                <button className='border-2 border-red-500 rounded-full p-[5px] ml-[50px]'><RiDeleteBin6Line className='text-red-500' /></button>
                            </div>
                            <div className='flex space-x-[40px] pt-[20px]'>
                                <span>Price</span> <span className='font-large font-semibold'>US 50.25$</span>
                            </div>
                        </div>
                    </div>
                    {/* ------------- */}
                </div>


                <div className="flex flex-col w-[35%]">
                    <div className='w-full p-5  border-2 border-[#D9D9D9] rounded-[10px]'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Check Out</h2>
                        <div className="flex justify-between px-5 py-[2px]">
                            <p className="text-[16px] text-[#5C5C5C]">Total Items</p>
                            <p className="text-[16px] font-semibold text-[#333333]">2</p>
                        </div>
                        <div className="flex justify-between px-5 py-[2px]">
                            <p className="text-[16px] text-[#5C5C5C]">Shipping Fees</p>
                            <p className="text-[16px] font-semibold text-[#333333]">US $10</p>
                        </div>
                        <div className="flex justify-between px-5 py-[2px]">
                            <p className="text-[16px] text-[#5C5C5C]">Subtotal</p>
                            <p className="text-[16px] font-semibold text-[#333333]">US $27.50</p>
                        </div>
                        <div className='px-5 mt-5'>
                            <button className="h-[50px] w-full rounded-[5px] bg-[#822BE2] hover:bg-purple-200 hover:border-2 hover:border-[#822BE2] hover:text-[#822BE2] hover:cursor-pointer text-white font-bold">
                                Checkout US $37.50
                            </button>
                        </div>
                    </div>

                    <div className='w-full p-5 flex-col border-2 border-[#D9D9D9] rounded-[10px] mt-[20px]'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payer Information</h2>
                        <div className='flex justify-between w-full '>
                            <div className='flex-col w-50% '>
                                <p className='font-medium text-[#5C5C5C] px-5 py-[2px]'>payer name</p>
                                <p className='font-semibold text-[#333333] px-5 py-[2px] '>First Name</p>
                            </div>
                            <div className='flex-col w-50%  '>
                                <p className='font-medium text-[#5C5C5C] px-5 py-[2px]'>payer name</p>
                                <p className='font-semibold text-[#333333]  px-5 py-[2px]'>payer name</p>
                            </div>
                        </div>
                        <div className='flex-col w-full  p-5'>
                            <p className='font-medium text-[#5C5C5C] py-[2px]'>Shipping Address</p>
                            <div className='w-full justify-center flex items-center border border-[#818181] mt-[10px] p-[10px] rounded-[5px]'>
                                <input
                                    type='text'
                                    placeholder='shipping address'
                                    className='bg-transparent outline-none w-full placeholder:text-gray-600'
                                />
                                <button>
                                    <AiOutlineEdit className='text-[25px]' />
                                </button>
                            </div>
                        </div>

                        <div className='flex w-full  pl-5 pr-5 items-center justify-center'>
                            <button className='w-full flex justify-center items-center bg-[#822BE2] font-semibold h-[50px] rounded-[5px] text-white  hover:bg-purple-200 hover:border-2 hover:border-[#822BE2] hover:text-[#822BE2] hover:cursor-pointer'>Save Changes</button>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Payment Information</h2>
                        <p className='px-5 py-[2px]'>Shipping fee will be add based on your buying product and product will be delivered with in 7 daysReturnable with <a href='#'>Terms & Conditions</a></p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Payment Option</h2>
                        <div className='flex gap-[10px] items-center px-5 py-[2px]'>
                            <FaCcVisa className='text-[50px] text-[#5C5C5C]' />
                            <FaCcPaypal className='text-[50px] text-[#5C5C5C]' />
                            <SiMastercard className='text-[50px] text-[#5C5C5C]' />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
        </>


    )
}

export default page
