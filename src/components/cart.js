import './css/main.scss'
import { useContext } from "react"
import { CartContext } from '../context/cartContext';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Cart() {
    const { itemAdded, setItemAdded } = useContext(CartContext);
    const [suma, setSuma] = useState();

    console.log(itemAdded)

    const clearAll = () => {
        setItemAdded([])
    }


    const removeItem = (id) => {
        const itemRemove = itemAdded.filter((item) => item.id !== id);
        setItemAdded(itemRemove)
    }

    // const sumaTotal = () => {
    //     itemAdded.map( item => item.price  )
    //         const numero = itemAdded[i].price;
    //         const total = suma + numero ;
    //         setSuma(total);
        
       
    // }

    const sumaTotal = () => {
       
            const sumar = itemAdded.map((item) => parseFloat(item.price))
              .reduce((previous, current) => {
                return previous + current;
              }, 0);

        setSuma(sumar);
       
    }


    useEffect(()=>{
        sumaTotal();

    },[itemAdded] )





if (itemAdded.length === 0)
return (

    <div> <h1>Cart</h1> <h3> Aun no hay items en tu carrito :( </h3>  <br/>  <Link to='/category'><Button variant='dark'>Ir a la tienda</Button></Link> </div>  
)

    return (<div>

        <h1>Cart</h1>

        <div style={{ marginTop: '4%',marginBottom: '1%' }}>

        {itemAdded.length > 0 && itemAdded.map(item => <div> <h5>x{item.quantity} {item.title}: {item.price}</h5></div>)}
        <h4>Total: {suma}$</h4>

        </div>


        <Button variant='dark' onClick={clearAll}>Clear all</Button>

        <div style={{ marginTop: '4%' }}>

            {itemAdded.length > 0 && itemAdded.map(item => <div  key={item.title}> <img style={{width:'10%'}} src={item.pictureUrl} alt={item.altImg} />  <h5>Producto: {item.title}</h5> <h5>Cantidad: {item.quantity}</h5>  <h5>Precio: {item.price}</h5>
                <h5>{item.description}</h5> <Button variant='dark' onClick={() => removeItem(item.id)}>Remove Item</Button> <hr /></div>)}

             
        </div>


    </div>)
}