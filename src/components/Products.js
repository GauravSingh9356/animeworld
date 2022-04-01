import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { Triangle } from 'react-loader-spinner';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const pro = useSelector((state) => {
    console.log(state);
    return state.products;
  });
  console.log(pro);

  if (pro.length == 0)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '150px',
          marginBottom: '100px',
        }}
      >
        <Triangle ariaLabel='loading-indicator' />
      </div>
    );

  //   if (true) return <h1>No Pixxa''s</h1>;

  return (
    <div style={{ padding: '30px' }}>
      <div className='shell'>
        <div className='container'>
          <div className='row'>
            {pro.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
