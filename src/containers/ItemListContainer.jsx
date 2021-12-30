import ItemList from '../components/ItemsList/ItemList'
import {useState, useEffect} from 'react'
import {getProduct, getProductByCategory} from '../products'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading/Loading'



const ItemListContainer = () => {
    
    const [listProduct, setListProduct]=useState([])
    const [loading, setLoading]=useState(true)
    const {categoryId} =useParams()

    useEffect(()=>{

        if(categoryId !== undefined){
            const list = getProductByCategory(categoryId)

            list.then(response=>{
                setListProduct(response)
                setLoading(false)
            })
        }else{
            const list = getProduct()

            list.then(response=>{
                setListProduct(response)
                setLoading(false)
            })
        }
        
        return (()=>{
            setListProduct([])
        })

    },[categoryId])
    
// Contenedor
    return ( 
        <div>
            {loading?<Loading/>:<ItemList product={listProduct}/>}
        </div>
    )
}

export default ItemListContainer;