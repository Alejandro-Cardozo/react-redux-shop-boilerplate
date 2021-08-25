import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.log('Err', error);
      }
    };

    getProducts();
  }, [dispatch]);

  console.log("Products: ", products);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
