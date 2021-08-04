import carritoPng from "../imgs/icons8-fast-cart-48.png"
import './css/navBar.css'

function CartWidget () {
    return (
        
        <div className="">

            <a className="carritoContainer" href="#"> 
            <img className="carrito" src={carritoPng} />
            </a>
            
        
      </div>

    )
}

export default CartWidget;
