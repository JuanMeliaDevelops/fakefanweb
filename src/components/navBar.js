import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './css/main.scss'
import fakefanlogo from './assets/imgs/fakefanlogo.png'


function NavBar () {
    return (
        
        <div className="navbarmain">


        <img style={{width:'15%'}} alt='FakeFanTheLabelLogo' src={fakefanlogo} />
        
        <ul>
          <li> <Link to='/' className="hovernormal"> SHOP\\\\ </Link></li>
          <li><Link to='/newDrops' className="hoverespecial"> NEW DROPS|||| </Link></li>
          <li><Link to='/connect' className="hovernormal"> CONNECT+ </Link></li>
        </ul>

        <CartWidget/>

      </div>

    )
}

export default NavBar;
