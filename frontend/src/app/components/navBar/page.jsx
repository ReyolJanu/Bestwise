'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { HiMenu, HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '@/app/slices/userSlice';
import { useRouter } from 'next/navigation';
import ReminderGift from '../../modal/reminder/page';

function Navbar() {
  const { user } = useSelector((state) => state.userState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [giftDropdownOpen, setGiftDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const logoutHandler = () => {
    dispatch(userLogout());
    setUserDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-[#F8F8F8] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={140} />
          </div>

          {/* Desktop Search + Menu */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {/* Search */}
            <div className="flex items-center border border-gray-400 rounded px-3 py-1 w-[300px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-sm"
              />
              <CiSearch size={20} />
            </div>

            {/* Links */}
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li className="cursor-pointer hover:text-[#822BE2]">Services</li>

              {/* Gift Combo */}
              <li className="relative cursor-pointer" onClick={() => setGiftDropdownOpen(!giftDropdownOpen)}>
                <div className="flex items-center hover:text-[#822BE2]">
                  Gift Combo
                  <svg className={`ml-1 w-4 h-4 transition-transform ${giftDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {giftDropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-white border rounded shadow w-56 text-sm z-50">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation('/surprisegift')}>Surprise Gift Delivery</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Customizable Gift</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={openModal}>Reminder Gift</li>
                  </ul>
                )}
              </li>

              <li className="cursor-pointer hover:text-[#822BE2]">About Us</li>
              <li className="cursor-pointer hover:text-[#822BE2]" onClick={() => handleNavigation('/user/checkout')}>
                <MdOutlineShoppingCart size={20} />
              </li>

              {/* User */}
              <li className="relative cursor-pointer">
                {user ? (
                  <div onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="flex items-center text-[#822BE2] font-semibold">
                    {user.firstName}
                    <svg className={`ml-1 w-4 h-4 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <span onClick={() => handleNavigation('/login')}>Login</span>
                )}

                {userDropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-white border rounded shadow w-40 text-sm z-50">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation('/user/profile')}>Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlists</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation('/user/history')}>History</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500" onClick={logoutHandler}>Logout</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-sm bg-[#F8F8F8]">
            <div className="border rounded flex items-center px-3 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none"
              />
              <CiSearch size={20} />
            </div>

            <div className="space-y-2">
              <div className="cursor-pointer hover:text-[#822BE2]">Services</div>

              {/* Gift Combo */}
              <div className="cursor-pointer hover:text-[#822BE2]" onClick={() => setGiftDropdownOpen(!giftDropdownOpen)}>
                Gift Combo
                {giftDropdownOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="hover:text-[#822BE2]" onClick={() => handleNavigation('/surprisegift')}>Surprise Gift Delivery</div>
                    <div className="hover:text-[#822BE2]">Customizable Gift</div>
                    <div className="hover:text-[#822BE2]" onClick={openModal}>Reminder Gift</div>
                  </div>
                )}
              </div>

              <div className="cursor-pointer hover:text-[#822BE2]">About Us</div>
              <div className="cursor-pointer hover:text-[#822BE2]" onClick={() => handleNavigation('/user/checkout')}>Cart</div>

              {user ? (
                <>
                  <div className="hover:text-[#822BE2]" onClick={() => handleNavigation('/user/profile')}>Profile</div>
                  <div className="hover:text-[#822BE2]">Wishlists</div>
                  <div className="hover:text-[#822BE2]" onClick={() => handleNavigation('/user/history')}>History</div>
                  <div className="text-red-500" onClick={logoutHandler}>Logout</div>
                </>
              ) : (
                <div className="hover:text-[#822BE2]" onClick={() => handleNavigation('/login')}>Login</div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Reminder Gift Modal */}
      {showModal && <ReminderGift onClose={closeModal} />}
    </>
  );
}

export default Navbar;
