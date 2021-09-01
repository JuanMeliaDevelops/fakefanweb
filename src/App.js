import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from "react";
import './App.css';

// Components
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/cart";

// Context
import { CartContext } from "./context/cartContext";


// Pages
import Home from './components/pages/Home.js';


function App() {

// cartContext

const [itemAdded, setItemAdded] = useState();



  return (

    
    <div className="App">
      



    <BrowserRouter>
    

  
    <Switch>

    <CartContext.Provider value={{itemAdded,setItemAdded}}>

    <NavBar/>

    <Route exact path='/'>
    <ItemListContainer  greetings="Connect+" />  
    </Route>

    <Route exact path='/category'>
   
    <ItemListContainer greetings="Shop\\" />  
    
    </Route>

    <Route exact path='/category/:categoryId'>
    <ItemListContainer greetings="Shop\\" />  
    </Route>

    <Route exact path='/newDrops'>
    <ItemListContainer greetings="Drops\\" />  
    </Route>

    <Route exact path='/newDrops/:id'>
    <ItemDetailContainer />  
    </Route>

    <Route exact path='/cart'>
    <Cart/>
    </Route>

    </CartContext.Provider>
   

    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
