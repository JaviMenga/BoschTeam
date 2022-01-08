import ItemDetail from '../components/ItemDetail/ItemDetail.jsx'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
import {getDoc, doc} from 'firebase/firestore'
import { DataBase } from '../Services/Firebase/Firebase.jsx'

const ItemDetailContainer = () => {
    
    const [Item, setItem]=useState([])
    const [loading, setLoading]=useState(true)
    const {detailId} = useParams()

    useEffect(()=>{
        getDoc(doc(DataBase, 'products', detailId)).then((querySnapshot)=>{
            const product = {id: querySnapshot.id,...querySnapshot.data()
            }
            setItem(product)
        }).catch((error)=>{
            console.log('error searching item', error)
        }).finally(()=>{
            setLoading(false)            
        })
    },[detailId])
    

// Contenedor
    return ( 
        <div style={{marginLeft:30}}>
            {loading? <Loading/>:<ItemDetail Item={Item}/>}
        </div>
    )
}


export default ItemDetailContainer;