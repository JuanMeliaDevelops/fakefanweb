import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from "./Item"
import './css/main.scss'






export default  function ItemList({ items }) {



    return (

        <div className='itemProductsContainer' >
            {items.length > 0 && items.map(item => <Link key={item.title} style={{textDecoration:'none'}} to={`/newDrops/${item.id}`}> <Item title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} alt={item.altImg} /> </Link>)}
        </div>

    )
}

