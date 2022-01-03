import ItemList from '../components/ItemsList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { DataBase } from '../Services/Firebase/Firebase'


const ItemListContainer = () => {
    
    const [listProduct, setListProduct]=useState([])
    const [loading, setLoading]=useState(true)
    const {categoryId} =useParams()
    
    useEffect(()=>{
        if(categoryId === undefined){
            getDocs(collection(DataBase, 'products')).then((querySnapshot) =>{
                const products = querySnapshot.docs.map(doc=>{
                    return{id:doc.id, ...doc.data()}
                })
                setListProduct(products)
            }).catch((error)=>{
                console.log('Error searching products', error)
            }).finally(()=>{
                setLoading(false)
            })
        }else{
            getDocs(query(collection(DataBase, 'products'), where('category','==', categoryId))).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc=>{
                    return{id:doc.id, ...doc.data()}
                })
                setListProduct(products)
            }).catch((error)=>{
                console.log('Error searching products', error)
            }).finally(()=>{
                setLoading(false)
            })
        }

        return (()=>{
            setListProduct([])
        })
    },[categoryId])

    // useEffect(()=>{

    //     if(categoryId !== undefined){
    //         const list = getProductByCategory(categoryId)

    //         list.then(response=>{
    //             setListProduct(response)
    //             setLoading(false)
    //         })
    //     }else{
    //         const list = getProduct()

    //         list.then(response=>{
    //             setListProduct(response)
    //             setLoading(false)
    //         })
    //     }
        
    //     return (()=>{
    //         setListProduct([])
    //     })

    // },[categoryId])
    
// Contenedor
    return ( 
        <div>
            {loading?<Loading/>:<ItemList product={listProduct}/>}
        </div>
    )
}

export default ItemListContainer;