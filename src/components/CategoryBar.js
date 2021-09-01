import { Link } from 'react-router-dom';
import './css/main.scss'




export default function CategoryBar() {



  return (
    <div>
      <div className="categoryBar">


        <ul>
          <li className="" ><Link to='/category' >Todo</Link></li>
          <li className=""> <Link to='/category/poncho' >Poncho</Link></li>
          <li className="" ><Link to='/category/parka' className="">Parka</Link></li>

        </ul>


      </div>
    </div>
  )
}


