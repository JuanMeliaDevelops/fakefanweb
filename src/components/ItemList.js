import React, { useState, useEffect } from 'react';
import Item from "./Item"
import loadingImg from './assets/imgs/loadingGif.gif'


function ItemList() {

    const [loading, setLoading] = useState(false);
    const [ItemData, setItemData] = useState({});
    
    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setLoading(true);
            setTimeout(function () {

                const fetchItem = {
                    data: { id: 1, title: "Producto 1", description: 'Descripcion de producto', price: "100" + "$", pictureUrl: "imagen" }
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

            <Item id={ItemData.id} title={ItemData.title} description={ItemData.description} price={ItemData.price} pictureUrl='url' />
            <Item id={ItemData.id} title={ItemData.title} description={ItemData.description} price={ItemData.price} pictureUrl='url' />
            <Item id={ItemData.id} title={ItemData.title} description={ItemData.description} price={ItemData.price} pictureUrl='url' />


        </div>

    )
}

export default ItemList;
