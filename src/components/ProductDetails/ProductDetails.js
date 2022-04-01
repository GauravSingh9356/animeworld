import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.find((product) => product.id == id)
  );

  return (
    <div className='movie-card'>
      <div className='containers'>
        <div
          className='hero'
          style={{
            background: `url("${product.image}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* <div className='details'>
            <div className='title1'>
              {product.title} <span>🍅 {product.rt_score}</span>
            </div>
          </div> */}
        </div>
        <div style={{ textAlign: 'center', paddingTop: '12px', color: '#000' }}>
          <h3>{product.title}</h3>
          <h5>
            <i>Director: {product.director}</i>
          </h5>
          <div className='title2'>
            <i>{product.original_title_romanised}</i>
          </div>
          <span>
            {product.running_time} <i>min,</i>
          </span>
          &nbsp;&nbsp;
          <span>
            🍅{product.rt_score} <i>fresh,</i>
          </span>
          &nbsp;&nbsp;
          <span>({product.release_date})</span>
        </div>

        <div className='description'>
            
          <div className='column2'>
            <p>{product.description}</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
