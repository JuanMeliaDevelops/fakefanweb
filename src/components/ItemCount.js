import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import iconMas from './assets/imgs/icons/icons8-más-48.png'
import iconMenos from './assets/imgs/icons/icons8-menos-48.png'

export default function ItemCount ({stock, initial}) {

   
    const [itemsBuy, setItemsBuy] = useState(initial);
    const [itemStock] = useState(stock);


    useEffect(() => {
       
    }, [itemsBuy, itemStock]);

    
return (
    
<div className='itemCounter'> 

<h3>Item</h3>

<div className='itemSum'>

<h3 className="buttonIcon" alt='restarItem' 
onClick={() => {

    if (itemsBuy === 1){
        setItemsBuy (itemsBuy-0);
    }
    else {
        setItemsBuy(itemsBuy - 1);
    }
}}>  <img alt='restarCarrito' src={iconMenos} />  </h3>


<h4 className="itemCount"> {itemsBuy} </h4> 

<h3 className="buttonIcon" alt='sumarItem' 
onClick={() => { 
    if (itemsBuy === itemStock || itemStock === 0 ){
        setItemsBuy (itemsBuy+0);
        document.getElementById('alertaStock').innerHTML = 'Actualmente no disponemos de stock <br/><br/>'  ;
    }
    else {
        setItemsBuy(itemsBuy + 1);        
    }
}} >  <img alt='sumarCarrito' src={iconMas} />  </h3>
 
 </div>
 
<br/>
<h6 id='alertaStock' > </h6>

<Button variant='dark' >add to cart</Button>

</div>

)}