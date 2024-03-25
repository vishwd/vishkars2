import { useContext } from "react";

import "./cartItems.css"
import { BuyContext } from "./BuyContext";

function CartItem(props){
    const{id, name, price, image} = props.Data;

    const{cartItems} = useContext(BuyContext);
    
     console.log(cartItems[id]);
     console.log(parseInt(price));
   
     
    return(
        <>
        <div className='itemCart'>
            <img src = {image} height="100px" ></img>
            <h2 className="name" size="2vw">{name}</h2>
            <p className={'amount'+id}>Total amount : {cartItems[id]*price}</p>
        </div>
       
        </>
    )
}

export default CartItem;