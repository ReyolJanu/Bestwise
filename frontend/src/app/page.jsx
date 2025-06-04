"use client";

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFire } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Heart, Flame } from 'lucide-react';
import { FaRegClock } from "react-icons/fa";
import Footer from './components/footer/page'
import Navbar from './components/navBar/page'
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from './slices/productSlice';
import {getProducts} from './actions/productAction'



const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
];

export default function FancyCarousel() {

  const { allProducts } = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
    console.log(allProducts)
  },[dispatch])

  const cards = [
    {
      icon: '✏️', // replace with your actual icon component or image
      title: 'Customizable Gift',
      description:
        'Design gifts your way — choose packaging, add notes, select colors or themes. Every gift becomes a reflection of your style and emotion.',
    },
    {
      icon: '⏰',
      title: 'Reminder Gift Notify',
      description:
        'Design gifts your way — choose packaging, add notes, select colors or themes. Every gift becomes a reflection of your style and emotion.',
    },
    {
      icon: '👨‍👩‍👦',
      title: 'Collaborative Gift',
      description:
        'Invite your friends and family to join in on a special gift. Split the cost, share the joy, and create memorable surprises — together.',
    },
    {
      icon: '🎁',
      title: 'Surprise Gift Delivery',
      description:
        'Schedule a surprise delivery for your loved ones at just the right moment. We’ll handle the magic while you enjoy the reactions.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className='w-full pr-[80px] pl-[80px] flex-col items-center justify-center'>
      <Navbar />
      <div className="w-full h-[500px] relative">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[500px]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className=' mt-[50px] space-y-[15px]'>
        <div className=' flex justify-between  items-center text-font-medium'><span>Categories</span><span className='flex justify-center items-center gap-[10px]'> Explore more <IoIosArrowForward /></span></div>
        <div className='flex justify-center items-center gap-[15px]'>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
          <div className='flex-col justify-center items-center '><div className='flex justify-center items-center rounded-[100px] border-1 w-[100px] h-[100px] border-[#818181]'>Image</div><span className='flex justify-center items-center'>Categories</span></div>
        </div>
      </div>

      <div className=' mt-[50px] space-y-[15px]'>
        <div className=' flex justify-between  items-center text-font-medium'><span className='flex justify-center items-center gap-[10px]'> <FaFire className='text-red-500' />Hot Sales</span><span className='flex justify-center items-center gap-[10px]'> Explore more <IoIosArrowForward /></span></div>
        <div className='flex  items-center gap-[15px] '>

          {/* carts */}
          <div className="w-[173px] h-[261px] rounded-lg ">
            <div className="relative">
              <Image
                src="/mug.jpg"
                alt="Birthday Mug"
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
              <h3 className="font-medium ">Birthday Mug</h3>
              <p className="font-medium  text-gray-700">US $25.75</p>
              <div className="flex mt-1">
                <span>☆☆☆☆☆</span>
              </div>
            </div>
          </div>
          <div className="w-[173px] h-[261px] rounded-lg ">
            <div className="relative">
              <Image
                src="/mug.jpg"
                alt="Birthday Mug"
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
              <h3 className="font-medium ">Birthday Mug</h3>
              <p className="font-medium  text-gray-700">US $25.75</p>
              <div className="flex mt-1">
                <span>☆☆☆☆☆</span>
              </div>
            </div>
          </div>
          {/* carts */}
        </div>
      </div>


      <div className='flex-col  mt-[20px]'>
        <div className='flex items-center gap-[10px] pb-[15px] text-font-medium'><FaRegClock />Upcoming Events</div>
        <div className="w-[250px] h-[250px]  rounded-lg overflow-hidden  bg-white relative">
          <div className="relative w-full h-[250px]">
            <Image
              src="/motherday.jpg"
              alt="Mother's day"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex w-[75%] items-center justify-center bg-white absolute bottom-0 right-0  rounded-tl-full rounded-bl-full  py-2 shadow">
            <span className="text-base font-medium">Mother’s day</span>
          </div>
        </div>
      </div>


      {/* all Products */}
      <div className='flex flex-wrap mt-[50px]'>
        <div className="w-[173px] h-[261px] rounded-lg ">
          <div className="relative">
            <Image
              src="/mug.jpg"
              alt="Birthday Mug"
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
            <h3 className="font-medium ">Birthday Mug</h3>
            <p className="font-medium  text-gray-700">US $25.75</p>
            <div className="flex mt-1">
              <span>☆☆☆☆☆</span>
            </div>
          </div>
        </div>
      </div>

      {/* services Divs */}
      <div className="flex justify-between mt-[50px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] h-[250px] justify-between  border-2 border-[#822BE2] rounded-lg p-4 flex flex-col items-center text-center "
          >
            <div className="flex items-center gap-2 mb-2 bg-[#822BE2] w-full h-[50px] pl-[5px] rounded-full">
              <div className=" w-[42px] h-[42px] flex items-center justify-center border-1 border-[#822BE2] text-white rounded-full bg-white">
                {card.icon}
              </div>
              <div className="font-semibold text-white flex justify-center items-center">{card.title}</div>
            </div>
            <p className="text-sm text-gray-700 mb-4">{card.description}</p>
            <button className="font-semibold w-full h-[40px] px-4 py-1 border-2 border-[#822BE2] text-[#822BE2] rounded hover:bg-purple-100 transition">
              Explore
            </button>
          </div>
        ))}
      </div>


      {/* Services */}
      <div className='w-full flex-col items-center border-2 border-[#822BE2] rounded-[12px] p-[10px] mt-[20px]'>
        <div className='flex bg-[#822BE2] items-center h-[50px] rounded-full'>
          <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center ml-[5px]'>💖</div><div className='flex justify-center items-center text-white pl-[40%]'>Rending Services</div>
        </div>
        <div className='flex w-full mt-[15px]'>
          <div className='w-[60%] space-y-[15px]'>
            <div className='flex gap-[15px]'>
              <div className='bg-orange-300 w-[60%] h-[200px] rounded-[10px] flex justify-center items-center relative overflow-hidden'> <Image src="/decoration4.jpg" alt="decoration" fill style={{ objectFit: 'cover' }} /></div>
              <div className='bg-orange-700 w-[40%] h-[200px] rounded-[10px] flex justify-center items-center  relative overflow-hidden'><Image src="/decoration1.jpg" alt="decoration" fill style={{ objectFit: 'cover' }} /></div>
            </div>
            <div className='flex gap-[15px]'>
              <div className='bg-orange-300 w-[300px] h-[200px] rounded-[10px] flex justify-center items-center relative overflow-hidden'><Image src="/decoration2.jpg" alt="decoration" fill style={{ objectFit: 'cover' }} /></div>
              <div className='bg-orange-700 w-[500px] h-[200px] rounded-[10px] flex justify-center items-center relative overflow-hidden'><Image src="/decoration3.jpg" alt="decoration" fill style={{ objectFit: 'cover' }} /></div>
            </div>
          </div>
          <div className='w-[40%] flex-col p-[20px] space-y-[20px]'>
            <div><span className='flex'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </span></div>
            <div className='flex items-center gap-[10px]'>
              <div className='w-[8px] h-[120px] bg-[#822BE2] rounded-full'></div>
              <div className='flex-col items-center h-full space-y-[10px]'>
                <div>All Decoration Items</div>
                <div>Party Table</div>
                <div>Other Elegent Items</div>
              </div>
            </div>
            <div><button className='border-2 border-[#822BE2] rounded-[5px] h-[40px] w-[100%] text-[#822BE2] font-semibold'>Explore</button></div>
          </div>
        </div>
      </div>


      {/* AboutUs */}
      <div className='flex w-full mt-[50px]'>
        <div className='w-[50%] h-[300px] rounded-[10px] flex justify-center items-center relative overflow-hidden'> <Image src="/map.jpg" alt="decoration" fill style={{ objectFit: 'cover' }} /></div>
        <div className='w-[50%] flex-col p-[20px] pl-[50px] space-y-[15px]'>
          <p className='text-[20px] font-semibold'>About Us</p>
          <p className='text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <div className='flex '>
            <div className='flex w-full'>

              <div className='w-[8px] h-[80px] bg-[#822BE2] rounded-full' />
              <div className='flex-col justify-center items-center  pl-[10px]'>
                <p className='font-bold text-[30px] text-[#822BE2]'>2500+</p>
                <p className='text-[14px]'>Active users</p>
              </div>

              <div className='w-[8px] h-[80px] bg-[#822BE2] rounded-full ml-[100px]' />
              <div className='flex-col justify-center items-center  pl-[10px]'>
                <p className='font-bold text-[30px] text-[#822BE2]'>10000+</p>
                <p className='text-[14px]'>Products</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* footer */}

      <Footer />
























      {/* Custom styles */}
      <style jsx global>{`
        /* Make dots purple */
        .slick-dots li button:before {
          font-size: 12px;
          color: #822BE2;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #822BE2;
          opacity: 1;
        }

        /* Make arrows purple */
        .slick-prev:before,
        .slick-next:before {
          color: #822BE2;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}
