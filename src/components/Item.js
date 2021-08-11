import './css/main.scss'
import itemImg from './assets/imgs/labelstyle.jpg'

function Item({ id, title, description, price, pictureUrl }) {
    

    return (

        <div className="itemContainer">
        <div className='itemImgContainer'> <img alt='itemPonchoNike' src={itemImg} /></div>

        <div className='itemProps'>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        </div>
        </div>

    )
}

export default Item;
