import carritoPng from "./assets/imgs/icons/icons8-fast-cart-48.png"
import './css/main.scss'

function CartWidget () {
    return (
        
        <div className="">

            <a className="carritoContainer"  href="#carrito"> 
            <img className="carrito" alt='carritoCompra' src={carritoPng} />
            </a>
            
        
      </div>

    )
}

export default CartWidget;
