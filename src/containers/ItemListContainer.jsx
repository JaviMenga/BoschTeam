import ItemList from '../components/ItemsList/ItemList'
import {useState, useEffect} from 'react'
import {getProduct, getProductByCategory} from '../products'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
    
    const [listProduct, setListProduct]=useState([])
    const {categoryId} =useParams()


    useEffect(()=>{

        if(categoryId !== undefined){
            const list = getProductByCategory(categoryId)

            list.then(response=>{
                setListProduct(response)
            })
        }else{
            const list = getProduct()

            list.then(response=>{
                setListProduct(response)
            })
        }
        
        return (()=>{
            setListProduct([])
        })

    },[categoryId])
    
// Contenedor
    return ( 
        <div>
            <ItemList product={listProduct}/>
        </div>
    )
}

export default ItemListContainer;