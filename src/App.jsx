import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'

function App() {

    return (
    <BrowserRouter>
        <div className = 'App'>
            <NavBar/>
                <Switch>
                    <Route exact path='/'><ItemListContainer/></Route>
                    <Route path='/category/:categoryId'><ItemListContainer/></Route>
                    <Route path='/detail/:detailId'><ItemDetailContainer/></Route>
                </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;