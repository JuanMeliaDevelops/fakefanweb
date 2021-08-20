import { Link } from 'react-router-dom';
import './css/main.scss'
import ItemCount from './ItemCount';


function ItemDetail({details}) {


    return (

        <div className='itemDetailContainer'>

            <Link to='/newDrops'>Volver</Link>

            <div className='itemDetailImgContainer'> <img className='itemDetailImg' src={details.pictureUrl} alt={details.altImg} /></div>

            <div className='itemDetails'>

                <h3>{details.title}</h3>
                <p>{details.description}</p>
                <h4>{details.price}</h4>

                <ItemCount initial={1} stock={6} />

            </div>


        </div>

    )
}

export default ItemDetail;
