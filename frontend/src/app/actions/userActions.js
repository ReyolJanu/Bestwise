import axios from 'axios';
import { setAllProducts } from '../slices/productSlice';
import { userLogin } from '../slices/userSlice';
  

export const getProducts = () => async (dispatch) => {
   try {
     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAllProducts`);
           console.log('Product get success:', response.data);
           dispatch(setAllProducts(response.data));  // save user to redux
   } catch (error) {
     console.log(error.response?.data.message || error.message);
   }
 };

export const fetchUserProfile = () => async (dispatch) => {
  try {
    console.log('Fetching user profile...');
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/myprofile`, { withCredentials: true });
    
    if (response.data && response.data.user) {
      console.log('User profile fetched successfully:', response.data.user);
      dispatch(userLogin({ user: response.data.user, role: response.data.user.role }));
    } else {
      console.log('No user data in response:', response.data);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error.response?.data?.message || error.message);
  }
};

 


