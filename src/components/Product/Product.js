import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ goods, cartButton }) => {
    /* const { hendleAddToCart } = props; */
    const { name, img, seller, price, ratings } = goods;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratting: {ratings} stars</small></p>
            </div>
            <button onClick={() => cartButton(goods)} className='button-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon style={{ margin: '3px' }} icon={faShoppingCart}></FontAwesomeIcon>
            </button>



        </div >
    );
};

export default Product;