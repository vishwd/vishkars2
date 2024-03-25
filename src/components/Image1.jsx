import React, { useContext } from 'react';
import {Products} from './Products';
import { BuyContext } from '../components/BuyContext';


function Image1(props){
  
  return (
    <>
      
    <div className='home'><img src={Products.image}></img></div>
    <Button>Add To Cart</Button>
    
    
    </>
  )
}

export default Image1