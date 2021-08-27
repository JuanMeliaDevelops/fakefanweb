import carritoPng from "./assets/imgs/icons/icons8-fast-cart-48.png"
import './css/main.scss'
import { Link } from 'react-router-dom';

function CartWidget() {
    return (

        <div className="">

            <Link  className="carritoContainer" to='/cart'>
         
                    <img className="carrito" alt='carritoCompra' src={carritoPng} />
           
            </Link>


        </div>

    )
}

export default CartWidget;
