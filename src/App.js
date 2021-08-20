import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

// Components
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

// Pages
import Home from './components/pages/Home.js';


function App() {
  return (

    
    <div className="App">
      
  
    <BrowserRouter>
    <NavBar/>
  
    <Switch>

    <Route exact path='/'>
      <Home/>
    </Route>

    <Route exact path='/newDrops'>
    <ItemListContainer greetings="Drops\\" />  
    </Route>

    <Route exact path='/newDrops/:id'>
    <ItemDetailContainer  />  
    </Route>

    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
