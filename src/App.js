
import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (

    
    <div className="App">
    <NavBar/>
    <ItemListContainer greetings="Lista de Ropa" />  

    </div>
  );
}

export default App;
