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

 


