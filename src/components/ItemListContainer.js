import './css/main.scss'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer(props) {
  return (

    <div className="flex">
      <h2>{props.greetings}</h2>

      <div >
        <ItemList />
        <ItemCount  initial={1} stock={6} />
      </div>




    </div>

  )
}

export default ItemListContainer;
