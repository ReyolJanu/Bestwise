"use client"

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {userLogout} from '../slices/userSlice';
import {useRouter} from 'next/navigation';

function Page() {
  const { user } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(userLogout());  
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello, {user.firstName}</h1>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        router.push('/')
      )}

      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Page;
