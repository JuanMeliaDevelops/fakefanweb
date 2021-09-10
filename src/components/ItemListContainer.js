import './css/main.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import CategoryBar from "./CategoryBar";
import loadingImg from './assets/imgs/loadingGif.gif'

//Firebase
import { getData } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


//Imagenes 
import itemImg from './assets/imgs/labelStyle.jpg'
import itemImg2 from './assets/imgs/labelStyle2.jpg'
import itemImg3 from './assets/imgs/labelStyle3.jpg'



function ItemListContainer(props) {
    const [loading, setLoading] = useState(false);
    const [itemData, setItemData] = useState([]);
    const { categoryId } = useParams();


    const fetchProductos = async () => {
        setLoading(true);
        const fetchCollection = collection(getData(), 'productos');
        const productSnaphot = await getDocs(fetchCollection);
        const productList = productSnaphot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


        if (categoryId) {
            const categories = query(fetchCollection, where( `${categoryId}`, '==', `categoryId`));
            const productSnaphot = await getDocs(categories);
            const categoryList = productSnaphot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setItemData(categoryList);
        } else {
            setItemData(productList);
        }

        setLoading(false);

    };


    useEffect(() => {
        fetchProductos();

    }, []);





    // useEffect(() => {

    //     const promesa = new Promise((resolve) => {
    //         setLoading(true);
    //         setTimeout(function () {

    //             const fetchItem = [

    //                 { id: '1', categoryId: 'poncho', title: "Nike Nikelab Acg Gore Tex 3", description: 'Nike Poncho vest black yellow rain wind jacket.', price: "120" + "$", pictureUrl: itemImg, altImg: 'Poncho Nike Nikelab Acg Gore Tex 3' },
    //                 { id: '2', categoryId: 'parka', title: "Y-3 CLASSIC HOODED TRENCH", description: 'Y-3 Spring/Summer 2021 – Chapter 2.', price: "250" + "$", pictureUrl: itemImg2, altImg: 'Y-3 Classic Hooded Trench' },
    //                 { id: '3', categoryId: 'parka', title: "Y-3 XPLORIC RAIN.RDY PARKA", description: 'Y-3 Technical rain parka for the stormiest weather and plenty of pockets.', price: "80" + "$", pictureUrl: itemImg3, altImg: 'Y-3 Technical rain parka' },

    //             ];


    //             resolve(fetchItem);

    //         }, 1000);


    //     }).then((dataResolve) => {
    //         setLoading(false);
    //         if (categoryId) {
    //             const filteredItems = dataResolve.filter(
    //                 (item) => item.categoryId === categoryId);
    //             setItemData(filteredItems);
    //         } else {
    //             setItemData(dataResolve);
    //         }


    //     }).catch((error) => {
    //         console.log('Error Product not found')
    //     })

    // }, [categoryId]);



    if (loading) {
        return (
            <div className="App" style={{ marginTop: "15vh" }}>
                <h3>Loading Products...</h3>
                <img alt='loading' style={{ width: "20%" }} src={loadingImg} />

            </div>
        );
    }


    return (

        <div className="flex">

            <div className='itemBigContainer'><h3>{props.greetings} </h3>
                <h4>August 2021</h4>
                <CategoryBar />
            </div>

            <div >
                <ItemList items={itemData} />
            </div>




        </div>

    )
}

export default ItemListContainer;
