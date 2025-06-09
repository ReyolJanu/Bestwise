import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '@/app/slices/userSlice';
import {useRouter} from 'next/navigation';

function Navbar() {
  const { user } = useSelector((state) => state.userState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  const loginHandler = () => {
    router.push('/login')
  }

  const profileHandler = () => {
    router.push('/user/profile')
  }



  return (
    <div className='flex w-full items-center h-[80px] sticky top-0 z-50 bg-[#F8F8F8] shadow-[0_1px_0_rgba(0,0,0,0.1)]'>
      <div className='w-[20%]'>
        <div className='relative'>
          <Image src={logo} alt='Logo' />
        </div>
      </div>

      <div className='w-[80%] flex justify-end items-center'>
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

        <ul className='flex items-center gap-[30px] text-[18px] relative'>
          <li>Services</li>
          <li>Gift Combo</li>
          <li>About Us</li>
          <li><MdOutlineShoppingCart /></li>

          {/* Conditional Dropdown/Login */}
          <li className='relative cursor-pointer'>
            {user ? (
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-2'
              >
                <span className='font-bold text-[#822BE2]'>{user.firstName}</span>
                <svg
                  className={`text-[#822BE2] w-4 h-4 transition-transform ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
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

            {/* Dropdown Menu */}
            {dropdownOpen && user && (
              <ul className='absolute right-0 top-[100%] mt-2 bg-white shadow-lg rounded-md w-[150px] p-2 z-50'>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer' onClick={profileHandler} >Profile</li>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer'>Wishlists</li>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer'>History</li>
                <li className='hover:bg-gray-100 px-3 py-2 rounded cursor-pointer text-red-500' onClick={logoutHandler}>Logout</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
