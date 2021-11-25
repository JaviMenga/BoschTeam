import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'

function App() {
    return ( <div className = "App">
                <NavBar/>
                <ItemListContainer greeting='¿Listos para hacer ejercicio?'/>s
            </div>
    );
}

export default App;