import './css/main.scss'
import { useContext } from "react"
import { CartContext } from '../context/cartContext';

export default function Cart() {
    const [itemAdded, setItemAdded] = useContext(CartContext);
    console.log(itemAdded)

    return (<div>

        <h1>Cart</h1>

        <h2>{itemAdded}</h2>

    </div>)
}