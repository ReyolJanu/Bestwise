"use client";
import React, { useState } from 'react'
import Navbar from '../components/navBar/page'
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import Footer from '../components/footer/page'
import SurpriseGift from '../modal/surpriseGift/page'

function page() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const saveApplyHandler = () => {
        setShowModal(true);
    }
    return (
        <>
            <div className='pl-[80px] pr-[80px] flex-col items-center'>
                <Navbar />
                <div className='flex w-full mt-[15px]'>
                    <div className='flex-col w-[65%] items-center pr-[20px]'>
                        <div className='w-full border-1 border-[#822BE2] rounded-[5px] p-[10px] mb-[20px] flex items-center justify-center text-[18px] font-semibold text-[#822BE2]'>Surprise Gift Delivery</div>
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


                    <div className="flex-col w-[35%]">
                        <div className='flex-col border-1 border-[#818181] rounded-[10px] p-[20px]'>
                            <p className='text-[18px] font-semibold text-[#333333] mb-[20px]'>Personal Information</p>
                            <div className='flex-col '>
                                <p className='text-[16px] text-[#5C5C5C]'>Person Name</p>
                                <div className='w-full justify-center flex items-center border border-[#D9D9D9] mt-[10px] p-[10px] rounded-[5px]'>
                                    <input
                                        type='text'
                                        placeholder='name'
                                        className='bg-transparent outline-none w-full placeholder:text-gray-600'
                                    />
                                </div>
                            </div>
                            <div className='flex-col'>
                                <p className='text-[16px] text-[#5C5C5C] mt-[10px]'>Person Mobile Number</p>
                                <div className='w-full justify-center flex items-center border border-[#D9D9D9] mt-[10px] p-[10px] rounded-[5px]'>
                                    <input
                                        type='number'
                                        placeholder='077-*******'
                                        className='bg-transparent outline-none w-full placeholder:text-gray-600'
                                    />
                                </div>
                            </div>
                            <div className='flex-col'>
                                <p className='text-[16px] text-[#5C5C5C] mt-[10px]'>Person Shipping Address</p>
                                <div className='w-full justify-center flex items-center border border-[#D9D9D9] mt-[10px] p-[10px] rounded-[5px]'>
                                    <input
                                        type='text'
                                        placeholder='name'
                                        className='bg-transparent outline-none w-full placeholder:text-gray-600'
                                    />
                                </div>
                            </div>
                            <div className='flex-col'>
                                <p className='text-[16px] text-[#5C5C5C] mt-[10px]'>Select Custume If you want</p>
                                <div className='w-full justify-center flex items-center border border-[#D9D9D9] mt-[10px] p-[10px] rounded-[5px]'>
                                    <select name="costume" className='w-full'>
                                        <option value="none" className='flex justify-center items-center w-full'>No costume</option>
                                        <option value="mickey" className='flex justify-center items-center w-full'>Mickey Mouse</option>
                                        <option value="tomjerry" className='flex justify-center items-center w-full'>Tom and Jerry</option>
                                        <option value="joker" className='flex justify-center items-center w-full'>Joker</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex-col '>
                                <p className='text-[16px] text-[#5C5C5C] mt-[10px]'>Suggestions</p>
                                <div className='w-full justify-center flex items-center border border-[#D9D9D9] mt-[10px] p-[10px] rounded-[5px]'>
                                    <textarea
                                        type='text'
                                        placeholder='Any suggestions...'
                                        className='bg-transparent outline-none w-full placeholder:text-gray-600'
                                    />
                                </div>
                            </div>
                            <button className='h-[50px] w-full text-[18px] text-white font-semibold rounded-[8px] hover:cursor-pointer bg-[#822BE2] hover:bg-purple-600 mt-[20px]' onClick={saveApplyHandler}>Save & Apply</button>
                        </div>

                    </div>
                </div>
            </div>
            {showModal && (
                <SurpriseGift onClose={closeModal}>
                    
                </SurpriseGift>
            )}
            
            <Footer />
        </>


    )
}

export default page
