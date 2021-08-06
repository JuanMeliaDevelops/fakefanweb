import CartWidget from './CartWidget';
import './css/main.scss'
import fakefanlogo from './assets/imgs/fakefan-logo-vec-web.png'

function NavBar () {
    return (
        
        <div className="navbarmain">


        <img style={{width:'10%'}} alt='FakeFanTheLabelLogo' src={fakefanlogo} />
        <h3 className="subtitulo">THELABEL</h3>
        
        
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
