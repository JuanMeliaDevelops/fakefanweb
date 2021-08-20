import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from "./Item"





function ItemList({items}) {

 
   
    return (

        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
  {items.length > 0 && items.map(item => <Link to={`/newDrops/${item.id}`}> <Item  title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} alt={item.altImg} /> </Link> )}
        </div>

    )
}

export default ItemList;
