import { Link } from 'react-router-dom';
import './css/main.scss'



export default function CategoryBar() {
  return (
<div>
    <div className="categoryBar">


      <ul>
          <li><Link to='/category' className="">Todo</Link></li>
        <li> <Link to='/category/poncho' className="">Poncho</Link></li>
        <li><Link to='/category/parka' className="">Parka</Link></li>
        
      </ul>


    </div>
    </div>
  )
}


