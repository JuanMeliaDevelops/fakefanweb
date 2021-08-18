import React, { useState, useEffect } from 'react';
import Item from "./Item"
import loadingImg from './assets/imgs/loadingGif.gif'


function ItemList() {

    const [loading, setLoading] = useState(false);
    const [ItemData, setItemData] = useState([]);
    
    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setLoading(true);
            setTimeout(function () {

                const fetchItem = {
                    data: [
                    { id: 1, title: "Producto 1", description: 'Descripcion de producto', price: "1500" + "$", pictureUrl: "imagen" },
                    { id: 2, title: "Producto 2", description: 'Descripcion de producto', price: "2400" + "$", pictureUrl: "imagen" },
                    { id: 3, title: "Producto 3", description: 'Descripcion de producto', price: "3700" + "$", pictureUrl: "imagen" } ] 
                };


                resolve(fetchItem);

            }, 2000);


        }).then((dataResolve) => {
            setLoading(false);
            setItemData(dataResolve.data);





        }).catch((error) => {
            console.log('Error Product not found')
        })

    }, []);

    if (loading==true) {
        return (
            <div className="App" style={{ marginTop: "15vh" }}>
                <h3>Loading Products...</h3>
                <img alt='loading'style={{ width: "20%" }} src={loadingImg} />

            </div>
        );
    }

    return (

        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>

            {ItemData.length > 0 && ItemData.map(item => <Item id={Item.id} title={Item.title} description={Item.description} price={Item.price} pictureUrl='url' /> )}
        </div>

    )
}

export default ItemList;
