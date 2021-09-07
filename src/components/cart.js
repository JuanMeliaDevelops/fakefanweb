import './css/main.scss'
import { useContext } from "react"
import { CartContext } from '../context/cartContext';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


export default function Cart() {
    const { itemAdded, setItemAdded } = useContext(CartContext);

    console.log(itemAdded)

    const clearAll = () => {
        setItemAdded([])
    }


    const removeItem = (id) => {
        const itemRemove = itemAdded.filter((item) => item.id !== id);
        setItemAdded(itemRemove)
    }


    return (<div>

        <h1>Cart</h1>

        <Button variant='dark' onClick={clearAll}>Clear all</Button>

        <div style={{ marginTop: '4%' }}>
            {itemAdded.length > 0 && itemAdded.map(item => <div> <h5>Producto: {item.title}</h5> <h5>Cantidad: {item.quantity}</h5>  <h5>Precio: {item.price}</h5>
                <h5>{item.description}</h5> <Button variant='dark' onClick={() => removeItem(item.id)}>Remove Item</Button> <hr /></div>)}
        </div>


    </div>)
}