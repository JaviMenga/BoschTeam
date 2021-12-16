import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'

function App() {

    return (
    <BrowserRouter>
        <div className = 'App'>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} /> 
                    <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                    <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
                </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;