import ItemDetail from '../components/ItemDetail/ItemDetail.jsx'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
import {getDoc, doc} from 'firebase/firestore'
import { DataBase } from '../Services/Firebase/Firebase.jsx'

const ItemDetailContainer = () => {
    
    const [Item, setlistItem]=useState([])
    const [loading, setLoading]=useState(true)
    const {detailId} = useParams()
    
    // useEffect(()=>{
    //     const list = getItemById(detailId)

    //     list.then(response=>{
    //         setlistItem(response)
    //         setLoading(false)
    //     })
    //     return (()=>{
    //         setlistItem([])
    //     })
    // },[detailId])

    useEffect(()=>{
        getDoc(doc(DataBase, 'products', detailId)).then((querySnapshot)=>{
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setlistItem(product)
        }).catch((error)=>{
            console.log('error searching item', error)
        }).finally(()=>{
            setLoading(false)
        })
    })


// Contenedor
    return ( 
        <div style={{marginLeft:30}}>
            {loading? <Loading/>:<ItemDetail Item={Item}/>}
        </div>
    )
}


export default ItemDetailContainer;