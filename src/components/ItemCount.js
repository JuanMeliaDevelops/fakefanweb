import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import iconMas from './assets/imgs/icons/icons8-más-48.png'
import iconMenos from './assets/imgs/icons/icons8-menos-48.png'

export default function ItemCount ({stock, initial, onAdd}) {

const [itemsBuy, setItemsBuy] = useState(initial);
    
return (
    
<div className='itemCounter'> 

<div className='itemSum'>

<h3 className="buttonIcon" alt='restarItem' 
onClick={() => {

    if (itemsBuy === 1){
        setItemsBuy (itemsBuy-0);
    }
    else {
        setItemsBuy(itemsBuy-1);
    }
}}>  <img alt='restarCarrito' src={iconMenos} /> </h3>


<h4 className="itemCount"> {itemsBuy} </h4> 

<h3 className="buttonIcon" alt='sumarItem' 
onClick={() => { 
    if (itemsBuy === stock || stock === 0 ){
        setItemsBuy (itemsBuy+0);
     const alerta =   document.getElementById('alertaStock').innerText = 'Actualmente no disponemos de stock'  ;
     setTimeout(function(){ document.getElementById('alertaStock').innerHTML = ''  ; }, 3000);
    }
    else {
        setItemsBuy(itemsBuy + 1);        
    }
}} >  <img alt='sumarCarrito' src={iconMas} />  </h3>
 
 </div>
 

<h6 id='alertaStock' > </h6>
<br/>
<Button variant='dark' >add to cart</Button>

</div>

)}