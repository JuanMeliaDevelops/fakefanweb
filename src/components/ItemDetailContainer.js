import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './css/main.scss'
import loadingImg from './assets/imgs/loadingGif.gif'
import ItemDetail from './ItemDetail'

//Imagenes 
import itemImg from './assets/imgs/labelStyle.jpg'
import itemImg2 from './assets/imgs/labelStyle2.jpg'
import itemImg3 from './assets/imgs/labelStyle3.jpg'

function ItemDetailContainer() {
    const { id } = useParams();
    const [loading, setLoading] =  useState(false);
    const [ItemDetails, setItemDetails] = useState([]);

    const getItemDetails = async () => {

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
            setItemDetails(dataResolve.data);
            
  
  
  
        }).catch((error) => {
            console.log('Error Product not found')
        })
    }

    useEffect(() => {
        getItemDetails();
    }, []);


     if (loading) {
      return (
          <div className="App" style={{ marginTop: "15vh" }}>
              <h3>Loading Products...</h3>
              <img alt='loading'style={{ width: "20%" }} src={loadingImg} />

          </div>
      );
  }

    return (

        <div>
          {ItemDetails.length > 0 && <ItemDetail details={ItemDetails[id-1]}/>}  
        </div>

    )

}

export default ItemDetailContainer;
