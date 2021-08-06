import './css/main.scss'
import ItemCount from './ItemCount';

function ItemListContainer (props) {
    return (
        
        <div className="">
        <h1>{props.greetings}</h1>

        <ItemCount initial={1} stock={6} />

      </div>

    )
}

export default ItemListContainer;
