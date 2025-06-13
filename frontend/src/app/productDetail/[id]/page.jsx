'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart, FaCcVisa, FaCcPaypal, FaStar } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { CiStar } from "react-icons/ci";
import Navbar from '../../components/navBar/page'
import Link from 'next/link';
import { Heart, Flame } from 'lucide-react';
import Image from 'next/image';
import { getProducts } from '../../actions/productAction'
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

function ProductDetailPage() {
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.productsState);
  const product = allProducts?.find((item) => item._id === id);

  if (!product) {
    return (
      <div className="p-6 text-red-500">
        Product not found or loading...
      </div>
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(allProducts)
  }, [dispatch])

  return (

    <div className='w-full justify-center flex-co pl-[120px] pr-[120px]'>  <Navbar />
      <div className='w-full flex h-auto mt-[20px]'>
        {/* Left Section - Image & Description */}
        <div className='flex-col justify-center w-[60%] h-[572px] '>
          <div className='w-full h-[500px] bg-gray-300 rounded-[10px]'>
            {/* Replace with product image if available */}
            <img src="/mug.jpg" alt={product.title} className="w-full h-full object-cover rounded-[10px]" />
          </div>
          <div className='flex space-x-1 pt-[10px]'>
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className=' bg-gray-300 w-[72px] h-[72px] rounded-[5px]'>1</div>
            ))}
          </div>
          <div className='flex-col items-center mt-[25px] '>
            <div className='pb-[15px]'>
              <span className='font-medium'>Description</span>
            </div>
            <span className='font-content text-[#5C5C5C]'>
              {product.description}
            </span>
          </div>
        </div>

        {/* Right Section - Info & Actions */}
        <div className='w-[40%] h-auto pl-[20px]'>
          <div className='flex-col justify-center space-y-[15px]'>
            <div className='flex justify-between items-center'>
              <span className='font-extra-large font-bold'>{product.title}</span>
              <span><FaRegHeart /></span>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center pr-[15px]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
              </div>
              <span>(27 Ratings)</span>
            </div>
            <div className='flex items-center space-x-[15px]'>
              <span className='font-extra-large font-bold'>US ${product.price}</span>
              <span className='font-content line-through'>US {(product.price + 10).toFixed(2)}$</span>
            </div>
            <div className='flex items-center space-x-[10px]'>
              <span className='font-medium'>Quantity</span>
              <button className='border bg-[#D9D9D9] rounded-[5px] w-[25px] h-[25px]'>-</button>
              <span className='w-[48px] h-[40px] border flex justify-center items-center font-large rounded-[5px]'>1</span>
              <button className='border bg-[#D9D9D9] rounded-[5px] w-[25px] h-[25px]'>+</button>
              <span className='pl-[50px] text-green-500'>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
            </div>
          </div>

          <div className='flex-col justify-center space-y-[15px] pt-[15px]'>
            <button className='flex justify-center items-center border text-[#822BE2] rounded-[8px] w-full h-[50px] gap-2 font-bold'>
              Add to cart <LuShoppingCart />
            </button>
            <button className='flex justify-center items-center border text-white bg-[#822BE2] rounded-[8px] w-full h-[50px] gap-2 font-bold'>
              Get now
            </button>
            <div className='w-full flex gap-[15px]'>
              <button className='border text-[#822BE2] rounded-[8px] w-[50%] h-[50px] font-semibold'>
                Apply Collaborative
              </button>
              <button className='border text-[#822BE2] rounded-[8px] w-[50%] h-[50px] font-semibold'>
                Apply Surprise Gift
              </button>
            </div>
          </div>

          <div className='mt-[15px] p-[15px] border rounded-[8px]'>
            <span className='font-medium'>Shipping Information</span><br />
            <span className='text-[#5C5C5C]'>
              Shipping fee will be added based on your buying product and delivered within 7 days.
            </span><br />
            <span className='text-[#5C5C5C]'>
              Returnable with <span className='underline text-blue-500'>Terms & Conditions</span>
            </span><br /><br />
            <span className='font-medium'>Payment Options</span><br />
            <div className='flex gap-[10px] items-center'>
              <FaCcVisa className='text-[50px] text-[#5C5C5C]' />
              <FaCcPaypal className='text-[50px] text-[#5C5C5C]' />
              <SiMastercard className='text-[50px] text-[#5C5C5C]' />
            </div>
          </div>
        </div>
      </div>

      {/* all Products */}
      <div className="flex flex-wrap gap-4 mt-[100px]">
        {allProducts && allProducts.length > 0 ? (
          allProducts.slice(0, 9).map((product) => (
            <Link
              key={product._id}
              href={`/productDetail/${product._id}`}
              className="w-[173px] h-[261px] rounded-lg block"
            >
              <div className="relative">
                <Image
                  src="/mug.jpg" // Replace with product.
                  alt={product.title}
                  width={172}
                  height={172}
                  className="rounded-lg object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-100 rounded-full p-1">
                  <Flame className="text-red-500 w-4 h-4" />
                </div>
                <div className="absolute top-2 right-2 bg-purple-100 rounded-full p-1">
                  <Heart className="text-purple-500 w-4 h-4" />
                </div>
              </div>

              <div className="mt-2 px-1">
                <h3 className="font-medium truncate">{product.title}</h3>
                <p className="font-medium text-gray-700">
                  US ${product.price}
                </p>
                <div className="flex text-yellow-400 text-xs sm:text-sm mt-1">
                  {Array.from({ length: 5 }, (_, i) => {
                    const fullStars = Math.floor(product.rating || 0);
                    const hasHalfStar = (product.rating || 0) - fullStars >= 0.5;

                    if (i < fullStars) {
                      return <AiFillStar key={i} />;
                    } else if (i === fullStars && hasHalfStar) {
                      return <AiTwotoneStar key={i} />;
                    } else {
                      return <AiOutlineStar key={i} />;
                    }
                  })}
                </div>

              </div>
            </Link>
          ))
        ) : (
          <p className="text-red-500">Server currently busy!</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
