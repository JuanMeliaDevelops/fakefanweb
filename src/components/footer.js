import './css/main.scss'
import { Link } from 'react-router-dom'

export default  function Footer () {








return (
    <div className='footerMain'>

<div> <h5>FAKEFANTHELABEL\\ ©</h5>
        <p>By JMelia for Coderhouse React js</p>
        </div>

<ul>
    <li><Link className='footerLinks' to='/category'>Shop</Link></li>
    <li><Link className='footerLinks' to='/newDrops'> Drops</Link></li>
    <li><Link className='footerLinks' to='/connect'>Connect</Link></li>
</ul>


    </div>
)
}