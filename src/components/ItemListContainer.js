import React, { useState, useEffect } from 'react';
import './css/main.scss'
import ItemList from './ItemList';
import loadingImg from './assets/imgs/loadingGif.gif'

//Imagenes 
import itemImg from './assets/imgs/labelStyle.jpg'
import itemImg2 from './assets/imgs/labelStyle2.jpg'
import itemImg3 from './assets/imgs/labelStyle3.jpg'


function ItemListContainer(props) {
  const [loading, setLoading] = useState(false);
  const [ItemData, setItemData] = useState([]);
 
  useEffect(() => {
      
      const promesa = new Promise((resolve) => {
          setLoading(true);
          setTimeout(function () {

              const fetchItem = {
                  data: [
                  { id: 1, title: "Nike Nikelab Acg Gore Tex 3", description: 'Nike Poncho vest black yellow rain wind jacket.', price: "120" + "$", pictureUrl: itemImg, altImg:'Poncho Nike Nikelab Acg Gore Tex 3' },
                  { id: 2, title: "Y-3 CLASSIC HOODED TRENCH", description: 'Y-3 Spring/Summer 2021 – Chapter 2.', price: "250" + "$", pictureUrl: itemImg2, altImg:'Y-3 Classic Hooded Trench' },
                  { id: 3, title: "Y-3 XPLORIC RAIN.RDY PARKA", description: 'Y-3 Technical rain parka for the stormiest weather and plenty of pockets.', price: "80" + "$", pictureUrl: itemImg3, altImg:'Y-3 Technical rain parka' } ] ,
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

  

  if (loading===true) {
      return (
          <div className="App" style={{ marginTop: "15vh" }}>
              <h3>Loading Products...</h3>
              <img alt='loading'style={{ width: "20%" }} src={loadingImg} />

          </div>
      );
  }


  return (

    <div className="flex">
      <h2 className='itemBigContainer' >{props.greetings}</h2>

      <div >
        <ItemList items={ItemData} />
      </div>




    </div>

  )
}

export default ItemListContainer;
