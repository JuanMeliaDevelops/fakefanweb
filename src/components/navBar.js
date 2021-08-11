import CartWidget from './CartWidget';
import './css/main.scss'
import fakefanlogo from './assets/imgs/fakefanlogo.png'

function NavBar () {
    return (
        
        <div className="navbarmain">


        <img style={{width:'15%'}} alt='FakeFanTheLabelLogo' src={fakefanlogo} />
        
        <ul>
          <li><a className="hovernormal" href="#tienda">SHOP\\\\</a></li>
          <li><a className="hoverespecial" href="#drops">NEW DROPS||||</a></li>
          <li><a className="hovernormal" href="#connect">CONNECT+</a></li>
        </ul>

        <CartWidget/>

      </div>

    )
}

export default NavBar;
