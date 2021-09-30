import './css/main.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import CategoryBar from "./CategoryBar";
import loadingImg from './assets/imgs/loadingGif.gif'

//Firebase
import { getData } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';




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
            const categoryFilter = productList.filter(
                (item) => item.categoryId === categoryId);

            setItemData(categoryFilter);
        } else {
            setItemData(productList);
        }

        setLoading(false);

    };


    useEffect(() => {
        fetchProductos();

    }, [categoryId]);




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
