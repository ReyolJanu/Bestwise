import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


function page() {
    return (
        <div className='w-full justify-center flex-co pl-[120px] pr-[120px]'>
            <div className='w-full flex h-auto'>
                <div className='flex-col justify-center w-[60%] h-[572px]'>
                    <div className='w-full h-[500px] bg-gray-300 rounded-[10px]'>Main Image</div>
                    <div className='flex space-x-1 pt-[10px]'>
                        <div className=' bg-gray-300 w-[72px] h-[72px] rounded-[5px]'>1</div>
                        <div className=' bg-gray-300 w-[72px] h-[72px] rounded-[5px]'>1</div>
                        <div className=' bg-gray-300 w-[72px] h-[72px] rounded-[5px]'>1</div>
                        <div className=' bg-gray-300 w-[72px] h-[72px] rounded-[5px]'>1</div>
                    </div>
                    <div className='flex-col items-center mt-[25px]'>
                        <div className='pb-[15px]'> <span className='font-medium'>Description</span></div>
                        <span className='font-content text-[#5C5C5C]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going
                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</span>
                    </div>
                </div>
                <div className='w-[40%] h-auto pl-[20px]'>
                    <div className='flex-col justify-center space-y-[15px]'>
                        <div className='flex justify-between items-center'><span className='font-extra-large font-bold'>Birthday card-Balloons-colors</span><span><FaRegHeart /></span></div>
                        <div className='flex items-center'><div className='flex items-center pr-[15px]'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></div><span>(27 Ratings)</span></div>
                        <div className='flex items-center space-x-[15px]'><span className='font-extra-large font-bold'>US 23.55$</span><span className='font-content line-through'>US 28.55$</span></div>
                        <div className='flex items-center space-x-[10px]'><span className='font-medium'>Quantity</span><button className='flex justify-center items-center border-1 border-[#D9D9D9] bg-[#D9D9D9] rounded-[5px] w-[25px] h-[25px]'>-</button><span className='w-[48px] h-[40px] border-1 border-[#818181] flex justify-center items-center font-large rounded-[5px]'>1</span><button className='flex justify-center items-center border-1 border-[#D9D9D9] bg-[#D9D9D9] rounded-[5px] w-[25px] h-[25px]'>+</button> <span className='pl-[50px] text-green-500'>Instock</span></div>
                    </div>


                    <div className='flex-col justify-center space-y-[15px] pt-[15px] '>
                        <button className='flex justify-center items-center border-1 border-[#822BE2] text-[#822BE2] rounded-[8px] w-full h-[50px] gap-2 font-bold'>Add to cart <LuShoppingCart /></button>
                        <button className='flex justify-center items-center border-1 border-[#822BE2] text-white btn-color rounded-[8px] w-full h-[50px] gap-2 font-bold'>Get now</button>
                        <div className='w-full flex gap-[15px]'>
                            <button className='flex justify-center items-center border-1 border-[#822BE2] text-[#822BE2] rounded-[8px] w-[50%] h-[50px] gap-2 font-semibold'>Apply Collaborative</button>
                            <button className='flex justify-center items-center border-1 border-[#822BE2] text-[#822BE2] rounded-[8px] w-[50%] h-[50px] gap-2 font-semibold'>Apply Surprice Gift</button>
                        </div>
                    </div>

                    <div className=' flex-col justify-center w-full mt-[15px] p-[15px] border-1 border-[#818181] rounded-[8px]'>
                        <span className='font-medium'>Shipping Information</span><br />
                        <span className='font-content text-[#5C5C5C]'>Shipping fee will be add based on your buying product
                            and product will be delivered with in 7 days</span><br />
                        <span className='font-content text-[#5C5C5C]'>Returnable with <span className='underline decoration-solid text-blue-500'>Terms & Conditions</span></span><br /><br />
                        <span className='font-medium'>Payment Options</span><br />
                        <div className='flex  items-center gap-[10px]'>
                            <FaCcVisa className='text-[50px] text-[#5C5C5C]' />
                            <FaCcPaypal className='text-[50px] text-[#5C5C5C]' />
                            <SiMastercard className='text-[50px] text-[#5C5C5C]' />
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default page
