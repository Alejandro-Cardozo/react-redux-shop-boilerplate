import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
      } catch (error) {
        console.log("Err", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
