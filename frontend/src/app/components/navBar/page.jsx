'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '@/app/slices/userSlice';
import { useRouter } from 'next/navigation';
import ReminderGift from '../../modal/reminder/page';

function Navbar() {
  const { user } = useSelector((state) => state.userState);
  const [dropdownOpen, setDropdownOpen] = useState(false);        // For user profile
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);  // For gift combo
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  const loginHandler = () => {
    router.push('/login');
  };

  const profileHandler = () => {
    router.push('/user/profile');
  };

  const surpriseGift = () => {
    router.push('/surprisegift');
  };

  const HistoryHandler = () => {
    router.push('/user/history');
  };

  const cartsHandler = () => {
    router.push('/user/checkout');
  };


  const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const saveApplyHandler = () => {
        setShowModal(true);
    }

  return (
    <div className='flex w-full items-center h-[80px] sticky top-0 z-50 bg-[#F8F8F8] shadow-[0_1px_0_rgba(0,0,0,0.1)]'>
      {/* Logo Section */}
      <div className='w-[20%]'>
        <div className='relative'>
          <Image src={logo} alt='Brand Logo' />
        </div>
      </div>

      {/* Right Section */}
      <div className='w-[80%] flex justify-end items-center'>
        {/* Search Box */}
        <div className='w-[300px] flex items-center border border-[#818181] gap-[15px] p-[10px] rounded-[5px] mr-[30px]'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent outline-none w-full placeholder:text-gray-600'
          />
          <button>
            <CiSearch className='text-[25px]' />
          </button>
        </div>

        {/* Navigation Items */}
        <ul className='flex items-center gap-[30px] text-[18px] relative'>
          <li className='hover:text-[#822BE2] cursor-pointer'>Services</li>

          {/* Gift Combo Dropdown (Always Available) */}

          <div
            onClick={() => setDropdownOpenTwo(!dropdownOpenTwo)}
            className='relative cursor-pointer'
          >
            <li className='relative'>
              <div className='flex items-center gap-2'>
                <span  className='hover:text-[#822BE2] cursor-pointer'>Gift Combo</span>
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpenTwo ? 'rotate-180' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
              </div>

              {dropdownOpenTwo && (
                <ul className='absolute right-0 top-[100%] mt-2 bg-white shadow-lg rounded-md w-[300px] flex-col justify-center items-center p-2 z-50'>
                  <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer text-[16px]' onClick={surpriseGift} >Surprise Gift Delivery</li>
                  <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer text-[16px]'>Customizable Gift</li>
                  <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer text-[16px]' onClick={saveApplyHandler}>Reminder Gift</li>
                </ul>
              )}

            </li>
          </div>

          <li  className='hover:text-[#822BE2] cursor-pointer'>About Us</li>
          <li onClick={cartsHandler}  className='hover:text-[#822BE2] cursor-pointer'><MdOutlineShoppingCart /></li>

          {/* Profile/Login Dropdown */}
          <li className='relative cursor-pointer'>
            {user ? (
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-2'
              >
                <span className='font-bold text-[#822BE2]'>{user.firstName}</span>
                <svg
                  className={`text-[#822BE2] w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            ) : (
              <span onClick={loginHandler}>Login</span>
            )}

            {/* Dropdown for logged in user */}
            {dropdownOpen && user && (
              <ul className='absolute right-0 top-[100%] mt-2 bg-white shadow-lg rounded-md w-[150px] p-2 z-50'>
                <li
                  className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer'
                  onClick={profileHandler}
                >
                  Profile
                </li>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer'>Wishlists</li>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer' onClick={HistoryHandler}>History</li>
                <li
                  className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer text-red-500'
                  onClick={logoutHandler}
                >
                  Logout
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {showModal && (
        <ReminderGift onClose={closeModal}>

        </ReminderGift>
      )}
    </div>
  );
}

export default Navbar;
