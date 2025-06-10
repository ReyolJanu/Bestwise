import React from 'react'
import Navbar from '../../components/navBar/page';
import Footer from '../../components/footer/page';
import { MdHistory } from "react-icons/md";
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

function page() {
    return (
        <div>
            <div className=' pl-[80px] pr-[80px] h-[100vh]'>
                <Navbar />
                <div className=' flex w-full items-center justify-center p-[5px] text-[#822BE2] font-semibold border-1 border-[#822BE2] rounded-[5px] mb-[20px]'><MdHistory className='text-[30px] pr-[10px]' /> History</div>

                 {/* history cards */}
                <div className='flex-col w-full items-center justify-center'>
                    <div className='flex w-full'>
                    <div className='flex items-center w-[40%]'>
                        <div className="relative w-[25%] ">
                            <Image
                                src="/mug.jpg"
                                alt="image"
                                width={130}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <span className='text-[18px] font-semibold'>Product name</span>
                    </div>
                    <div className='flex justify-evenly items-center w-[60%]'>
                        <p className='font-semibold text-[16px]'>US 20.50$</p>
                        <p  className='text-[16px]'>Date</p>
                        <p  className='text-[16px]'>Pending</p>
                        <p  className='text-[23px]'><FaRegEye /></p>
                        <p  className='text-[23px] text-red-500'><RiDeleteBin6Line /></p>
                        <button  className='border-2 border-[#822BE2] text-[16px] rounded-[5px] bg-[#822BE2] hover:bg-purple-200 hover:border-2 hover:border-[#822BE2] hover:text-[#822BE2] hover:cursor-pointer text-white py-[5px] px-[20px]'>Feedback</button>
                    </div>
                </div>
                <hr  className='mt-[15px] w-[50%] ml-[25%] text-[#D9D9D9] pb-[20px]'/>
                </div>

                {/* ---------------- */}

                {/* history cards */}
                <div className='flex-col w-full items-center justify-center'>
                    <div className='flex w-full'>
                    <div className='flex items-center w-[40%]'>
                        <div className="relative w-[25%] ">
                            <Image
                                src="/mug.jpg"
                                alt="image"
                                width={130}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <span className='text-[18px] font-semibold'>Product name</span>
                    </div>
                    <div className='flex justify-evenly items-center w-[60%]'>
                        <p className='font-semibold text-[16px]'>US 20.50$</p>
                        <p  className='text-[16px]'>Date</p>
                        <p  className='text-[16px]'>Pending</p>
                        <p  className='text-[23px]'><FaRegEye /></p>
                        <p  className='text-[23px] text-red-500'><RiDeleteBin6Line /></p>
                        <button  className='border-2 border-[#822BE2] text-[16px] rounded-[5px] bg-[#822BE2] hover:bg-purple-200 hover:border-2 hover:border-[#822BE2] hover:text-[#822BE2] hover:cursor-pointer text-white py-[5px] px-[20px]'>Feedback</button>
                    </div>
                </div>
                <hr  className='mt-[15px] w-[50%] ml-[25%] text-[#D9D9D9]  pb-[20px]'/>
                </div>

                {/* ---------------- */}
                
            </div>
            <Footer />
        </div>
    )
}

export default page
