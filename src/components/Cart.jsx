import { useContext } from "react";
import { Products } from "./Products";
import {BuyContext} from "./BuyContext"
import CartItem from "./cartItems";


function Cart(){
    const {cartItems} = useContext(BuyContext)
    return(
        <div className="Cart">
            <h1 className="cart1"> CART </h1>
            <div className = "CartItems">
                {Products.map((products) => {
                  if(cartItems[products.id] !== 0){
                        return(<CartItem Data = {products}/>)
                    }}
    )}
            </div>
        </div>
    );
}

export default Cart;





