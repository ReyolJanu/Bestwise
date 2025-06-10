"use client";
import React, { useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';

const ReminderGift = ({ onClose, children }) => {
  const modalRef = useRef(null);


  const { user } = useSelector((state) => state.userState);

  return (
    <div style={styles.overlay} >
      <div style={styles.modal} ref={modalRef}>
        {children}
        <div className='flex-col  rounded-[10px]'>
          <div className='w-full flex justify-between pb-[20px]'> <p className='text-[18px] font-semibold'>Reminder Gift Notifier</p><IoIosCloseCircleOutline onClick={onClose} className='text-[30px] hover:cursor-pointer hover:text-red-500' /></div>
          <div className='flex-col'>
            <p className='text-[#5C5C5C] font-semibold'>Reminder News</p>
            <textarea type='text' className='border-2 border-[#D9D9D9] rounded-[5px] w-full mt-[10px] h-[150px] p-[15px]' />
          </div>
          <div className='flex w-full pt-[15px]'>
            <div className='flex-col w-[50%] justify-between items-center '>
              <p className='text-[#5C5C5C] font-semibold'>Choose Date</p>
              <div className='flex space-x-[10px] justify-center items-center mt-[10px]'>
                <div className='border-2 border-[#D9D9D9] w-[70%] flex justify-center items-center pl-[10px] pr-[10px] h-[50px] rounded-[5px]'>
                  <select name="month" className='w-full bg-transparent outline-none placeholder:text-gray-600'>
                    <option value="none" className='flex justify-center items-center w-full'>January</option>
                    <option value="none" className='flex justify-center items-center w-full'>February</option>
                    <option value="none" className='flex justify-center items-center w-full'>March</option>
                    <option value="none" className='flex justify-center items-center w-full'>April</option>
                    <option value="none" className='flex justify-center items-center w-full'>May</option>
                    <option value="none" className='flex justify-center items-center w-full'>June</option>
                    <option value="none" className='flex justify-center items-center w-full'>July</option>
                    <option value="none" className='flex justify-center items-center w-full'>August</option>
                    <option value="none" className='flex justify-center items-center w-full'>September</option>
                    <option value="none" className='flex justify-center items-center w-full'>October</option>
                    <option value="none" className='flex justify-center items-center w-full'>November</option>
                    <option value="none" className='flex justify-center items-center w-full'>December</option>
                  </select>
                </div>
                <div className='w-[5px] rounded-full h-[30px] bg-[#D9D9D9]' />
                <div className='border-2 border-[#D9D9D9] w-[30%] flex justify-center items-center pl-[10px] pr-[10px] h-[50px] rounded-[5px]'>
                  <input type='number' className='w-full bg-transparent outline-none placeholder:text-gray-600' placeholder='Date' />
                </div>
              </div>
            </div>
            <div className='flex-col w-[50%] items-center pl-[20px]'>
              <div className='flex-col w-full'>
                <p className='text-[#5C5C5C] font-semibold'>Choose Event</p>
                <div className='border-2 border-[#D9D9D9] w-full flex justify-center items-center pl-[10px] pr-[10px] mt-[10px] h-[50px] rounded-[5px]'>
                  <select name="month" className='w-full bg-transparent outline-none placeholder:text-gray-600'>
                    <option value="none" className='flex justify-center items-center w-full'>BirthDay</option>
                    <option value="none" className='flex justify-center items-center w-full'>Father's day</option>
                    <option value="none" className='flex justify-center items-center w-full'>Monther's day</option>
                    <option value="none" className='flex justify-center items-center w-full'>Brother's day</option>
                    <option value="none" className='flex justify-center items-center w-full'>Christmas</option>
                    <option value="none" className='flex justify-center items-center w-full'>KeybirthDay</option>
                    <option value="none" className='flex justify-center items-center w-full'>Newyear</option>
                    <option value="none" className='flex justify-center items-center w-full'>Others</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='flex w-full gap-[10px] pt-[20px]'>
          <button onClick={onClose} className='h-[50px] w-[30%] text-[18px] border-2 border-[#822BE2] text-[#822BE2] font-semibold rounded-[8px] hover:cursor-pointer bg-white hover:bg-purple-200 mt-[20px]'>Cancel</button>
          <button className='h-[50px] w-[70%] text-[18px] text-white font-semibold rounded-[8px] hover:cursor-pointer bg-[#822BE2] hover:bg-purple-600 mt-[20px]'>Set Reminder</button>
        </div>
      </div>
    </div>
  );
};


export default ReminderGift;

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '40%',
    // textAlign: 'center',
    position: 'relative',
  }
};
