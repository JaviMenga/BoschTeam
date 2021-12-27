import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import Login from './components/Login/Login.jsx'
import {useEffect,useContext} from 'react'
import userContext from './components/Context/userContext'
import {CartContextProvider} from './components/Context/CartContext'

function App() {
    const {login}=useContext(userContext)

    useEffect (() => {
        const loggedUserJSON=window.localStorage.getItem('user')
        if(loggedUserJSON){
            const objUser=JSON.parse(loggedUserJSON)
            login(objUser)
        }
    },[])
    return (
    <BrowserRouter>
            <div className = 'App'>
                <NavBar/>
                <CartContextProvider>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>} /> 
                        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                        <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
                        <Route path='/login' element={<Login/>} />
                    </Routes>
                </CartContextProvider>
            </div>
    </BrowserRouter>
    );
}

export default App;