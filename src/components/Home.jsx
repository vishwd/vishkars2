import React, { useContext }from 'react';
import { Products } from './Products';
import { BuyContext } from './BuyContext';
import './Home.css' ;
import { useState } from 'react';
import { useEffect } from 'react';

function Home(props) {
    const{id,name,price,image}=props.Data;
    const { addToCart, cartItems } = useContext(BuyContext);
    const cartItemsAmount = cartItems[Products.id];
    const [showContent, setShowContent] = useState(false);

 
    
    return (
        <>
                <div key={id}>
                    <h1 className={'name'+id}>{name}</h1>
                    <h2 className={'price'+id}>{price}</h2>
                   
                    <button className={'Addtocart'+id} onClick={() => addToCart(id)} > Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
                    <img src={image} alt={name} className='img' />
                </div>
            
        </>
    );
}

export default Home;
