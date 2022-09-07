import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const item of cart) {
        console.log(item)

        total = total + item.price;
        shipping = shipping + item.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const allTOtal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1>order summary</h1>
            <p>cart count: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {allTOtal}</h5>

        </div>
    );
};

export default Cart;