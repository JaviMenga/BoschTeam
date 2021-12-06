import ItemList from "../components/ItemsList/ItemList"
import {useState, useEffect} from 'react'
import {getProduct} from '../products'



const ItemListContainer = () => {
    
    const [listProduct, setListProduct]=useState([])

    useEffect(()=>{
        const list = getProduct()

        list.then(response=>{
            setListProduct(response)
        })
        return (()=>{
            setListProduct([])
        })
    },[])
    
// Contenedor
    return ( 
        <div>
            <ItemList product={listProduct}/>
        </div>
    )
}

export default ItemListContainer;