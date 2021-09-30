import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';


// Components
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/cart";
import CompraForm from "./components/CompraForm";
import Footer from "./components/footer";
import Connect from "./components/Connect";

// Context
import { CartContext } from "./context/cartContext";


// Pages
import Home from './components/pages/Home.js';


function App() {

  // cartContext

  const [itemAdded, setItemAdded] = useState([]);
  const [suma, setSuma] = useState([]); 

  
  return (


    <div className="App">




      <BrowserRouter  basename={process.env.PUBLIC_URL}>



        <Switch>

          <CartContext.Provider value={{itemAdded, setItemAdded, suma, setSuma,}}>

            <NavBar />

            <Route exact path='/'>
            <ItemListContainer greetings="Shop\\" />
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
              <Cart />
            </Route>
            <Route exact path='/compra'>
              <CompraForm/>
            </Route>

            <Route exact path='/connect'>
              <Connect/>
            </Route>
    <Footer/>
          </CartContext.Provider>


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
