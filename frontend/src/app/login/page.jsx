import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';

function Page() {
  return (
    <div className='background min-h-screen flex justify-center items-center drop-shadow-lg'>
      <div className='bg-white w-[581px] rounded-[12px] pt-[50px] pb-[50px] flex flex-col items-center space-y-[15px]'>
        <div className='w-[200px] relative'>
          <Image src={logo} alt='Logo' />
        </div>

        <span className='font-extra-large mb-4 font-semibold'>Login Account</span>

        <div className='w-full flex flex-col gap-4 pl-[45px] pr-[45px]'>
          <div className='flex flex-col'>
            <label className='font-content mb-1'>Email</label>
            <input
              className='pl-[20px] w-full border border-[#818181] focus:outline-none focus:border-[#822BE2] p-2 rounded-[5px]'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-content mb-1'>Password</label>
            <input
              className='pl-[20px] w-full border border-[#818181] focus:outline-none focus:border-[#822BE2] p-2 rounded-[5px]'
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <span className='text-[14px] w-full flex justify-end'>Forgot Password?</span>

          <button className='w-full h-[50px] rounded-[8px] btn-color text-white font-medium'>Login</button>
          <div className='w-full flex justify-center items-center font-content'>
            <span>Don’t have an account? <span className='underline decoration-solid text-blue-500'>Sign up</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
