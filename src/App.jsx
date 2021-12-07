import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'

function App() {
    return ( <div className = "App">
                <NavBar/>
                <ItemListContainer/>
                <ItemDetailContainer/>
            </div>
    );
}

export default App;