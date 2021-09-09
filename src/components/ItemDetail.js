import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/main.scss'
import ItemCount from './ItemCount';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { useContext } from "react"
import { CartContext } from '../context/cartContext';


function ItemDetail({ details }) {

    const [cantidad, setCantidad] = useState(1);

    const [productAdded, setProductAdded] = useState(false);

    const [stock] = useState(6);

    const { itemAdded, setItemAdded } = useContext(CartContext);

    const { id } = useParams();

    const [isInCart, setIsInCart] = useState(false);




   


    const onAdd = (count) => {


        if (cantidad !== 0 && cantidad <= stock) {

            if (!isInCart) {
                setCantidad(count);
                setProductAdded(true);
                console.log('Se agrego', count, ' de ', details.title)
                itemAdded.push({ ...details, quantity: count })
                setItemAdded(itemAdded);
                console.log(itemAdded)

    

            }
        }
    }


    const showItemCount = () => {

        return (
            <ItemCount initial={cantidad} stock={stock} onAdd={onAdd} />
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
                    <h4>${details.price}</h4>
                    {!productAdded && showItemCount()}
                    {productAdded && showButton()}

                </div>

            </div>
        </div>

    )
}

export default ItemDetail;
