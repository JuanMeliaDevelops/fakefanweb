import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/main.scss'
import ItemCount from './ItemCount';
import { Button } from 'react-bootstrap';


function ItemDetail({ details }) {

    const [cantidad, setCantidad] = useState(1);

    const [productAdded, setProductAdded] = useState(false);

    const [stock, setStock] = useState(6);


    const addProduct = () => {
        console.log('Agregar', cantidad, 'de', details)

        if (cantidad !== 0 && cantidad <= stock) {
            setProductAdded(true);
        }
    };

    const showItemCount = () => {

        return (
            <ItemCount initial={cantidad} stock={stock} onAdd={addProduct} />
        )
    }

    const showButton = () => {

        return (
            <div>
                <Link to='/cart'><Button variant='dark' style={{ marginTop: "10%" }}>Go to cart</Button></Link>
                <br /> <br />
                <h6 >Tu producto ya esta en el carrito de compras!</h6>
            </div>


        )




    }

    return (

        <div className='itemDetailBigContainer'>

            <Link className='buttonVolver' to='/newDrops'> <h5> Volver </h5></Link>
            <div className='itemDetailContainer'>


                <div className='itemDetailImgContainer'> <img className='itemDetailImg' src={details.pictureUrl} alt={details.altImg} /></div>

                <div className='itemDetails'>

                    <h3>{details.title}</h3>
                    <p>{details.description}</p>
                    <h4>{details.price}</h4>
                    {!productAdded && showItemCount()}
                    {productAdded && showButton()}

                </div>

            </div>
        </div>

    )
}

export default ItemDetail;
