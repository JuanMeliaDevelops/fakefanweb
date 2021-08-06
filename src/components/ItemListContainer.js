import './css/main.scss'
import ItemCount from './ItemCount';

function ItemListContainer (props) {
    return (
        
        <div className="">
        <h2>{props.greetings}</h2>

        <ItemCount initial={1} stock={6} />

      </div>

    )
}

export default ItemListContainer;
