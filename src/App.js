import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'

function App() {
    return ( <div className = "App">
                <NavBar/>
                <ItemListContainer greeting={"Elige el entrenamiento que más te guste"}>
                </ItemListContainer>
            </div>
    );
}

export default App;