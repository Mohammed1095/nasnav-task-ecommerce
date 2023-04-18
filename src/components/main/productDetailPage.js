import React from 'react';
import './ProductDetailPage.scss';
import { adidas } from '../../assets/icons/adidas-logo';
import RatingDisplay from './components/ratingDisplay/RatingDisplay';
import ProductSizes from './components/ProductSizes/productSizes';
import ProductColors from './components/ProductColors/productColor';
import QuantityBox from './components/productQuantity/quantityBox';
import { arrowLeftIcon, arrowRightIcon } from '../../assets/icons/main-icons';
const ProductDetailPage = (props) => {
  return (
    <div className='product-detail'>
      <div className='product-images'>
        <div className='main-image'>
          <img
            src={require('../../assets/images/main-image.jpg')}
            alt='Product Image'
          />
        </div>
        <div className='preview-images'>
          {arrowLeftIcon}
          <img
            src={require('../../assets/images/Group 333/Group 333.png')}
            alt='Product Preview 1'
            className='preview-img-block'
          />
          <img
            src={require('../../assets/images/Group 335/Group 335.png')}
            alt='Product Preview 2'
            className='preview-img-block'
          />
          <img
            src={require('../../assets/images/Group 331/Group 331.png')}
            alt='Product Preview 3'
            className='preview-img-block'
          />
          <img
            src={require('../../assets/images/Group 329/Group 329.png')}
            alt='Product Preview 4'
            className='preview-img-block'
          />
          {arrowRightIcon}
        </div>
      </div>
      <div className='product-details'>
        <div className='logo'>{adidas}</div>
        <div className='product-info'>
          <p className='product-description'>Adidas black t-shirt</p>
          <p className='product-category'>Men</p>
          <div className='product-rate'>
            <RatingDisplay />
            <p>4.9 of 5</p>
            <p>22 rates</p>
          </div>
          <div className='product-price'>
            <p className='product-current-price'>9,999 LE</p>
            <p className='product-discount-price'>6,999 LE</p>
            <div className='product-discount-percentage'>30% off</div>
          </div>
          <div className='product-sizes'>
            <ProductSizes />
          </div>
          <div className='product-colors'>
            <ProductColors />
          </div>
          <div className='product-quantity'>
            <QuantityBox />
          </div>
          <div className='product-actions'>
            <button
              className='add-to-cart-btn'
              onClick={() => props.onAddToCart()}
            >
              Add to Cart
            </button>
            <button className='pick-from-store-btn'>Pickup From Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
