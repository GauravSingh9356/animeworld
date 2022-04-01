import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='movie_card' id='bright'>
        <div className='info_section'>
          <div className='movie_header'>
            <img className='locandina' src={product.movie_banner} />
            <h1>{product.title}</h1>
            <h4>
              {product.release_date}, {product.director}
            </h4>
            <span className='minutes'>{product.running_time} min</span>
            <p className='type'>🍅 {product.rt_score}</p>
          </div>
          <div className='movie_desc'>
            <p className='text'>{product.description}</p>
          </div>
          <div className='movie_social'>
            <button
              className='read-more'
              onClick={() => {
                navigate(`/${product.id}`);
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <div
          className='blur_back'
          style={{ background: `url("${product.image}")` }}
        ></div>
      </div>
    </>
  );
};

export default Product;
