import carritoPng from "./assets/imgs/icons/icons8-fast-cart-48.png"
import './css/main.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { useContext } from "react"
import { useState } from "react";
import { useEffect } from "react";

function CartWidget() {
    const { itemAdded, setItemAdded } = useContext(CartContext);
    const [ cartIcon, setCartIcon ] = useState();

   

    useEffect(()=> {
        
    setCartIcon(itemAdded.length)
    
    },[itemAdded]);


    return (

        <div className="">

            <Link style={{color:'black', textDecoration:'none',}} className="carritoContainer" to='/cart'>
                    <img   className="carrito" alt='carritoCompra' src={carritoPng} />

                {cartIcon > 0 &&  <h5 style={{marginRight:'8px', color:'black', }}>{cartIcon}</h5> }   
           
            </Link>
            


        </div>

    )
}

export default CartWidget;
