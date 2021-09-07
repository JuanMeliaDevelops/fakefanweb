import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import iconMas from './assets/imgs/icons/icons8-más-48.png'
import iconMenos from './assets/imgs/icons/icons8-menos-48.png'

export default function ItemCount({ stock, initial, onAdd }) {

    const [itemsBuy, setItemsBuy] = useState(initial);
    const [hasStock, setHasStock] = useState(true);

    const sumar = () => {
        if (itemsBuy === stock || stock === 0) {
            setItemsBuy(itemsBuy + 0);
            setHasStock(false);
            setTimeout(function () { setHasStock(true) }, 3000);
        }
        else {
            setItemsBuy(itemsBuy + 1);
        }
    };

    const restar = () => {

        if (itemsBuy === 1) {
            setItemsBuy(itemsBuy - 0);
        }
        else {
            setItemsBuy(itemsBuy - 1);
        }
    };

    

    const showAlert = () => {
        return (
            <h6>Actualmente no disponemos de stock</h6>
        )
    }

    return (

        <div className='itemCounter'>

            <div className='itemSum'>

                <h3 className="buttonIcon" alt='restarItem' onClick={restar}>  <img alt='restarCarrito' src={iconMenos} /> </h3>


                <h4 className="itemCount"> {itemsBuy} </h4>

                <h3 className="buttonIcon" alt='sumarItem' onClick={sumar} >  <img alt='sumarCarrito' src={iconMas} />  </h3>

            </div>

            {!hasStock && showAlert()}


            <br />
            <Button variant='dark' onClick={() => onAdd(itemsBuy)} >add to cart</Button>

        </div>

    )
}