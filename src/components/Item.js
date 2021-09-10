import { Button } from 'react-bootstrap';
import './css/main.scss'



export default function Item({ id, title, description, price, pictureUrl, altImg }) {


    return (


        <div className="itemContainer">
            <Button className='buyBoton' variant="dark">View product</Button>
            <div className='itemImgContainer'> <img src={pictureUrl} alt={altImg} /></div>


            <div className='itemProps'>
                <h3>{title}</h3>
                <p>{description}</p>

                <h4>${price}</h4>

            </div>


        </div>

    )
}

