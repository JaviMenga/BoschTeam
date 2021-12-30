import ItemDetail from '../components/ItemDetail/ItemDetail.jsx'
import {useState, useEffect} from 'react'
import {getItemById} from '../products'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

const ItemDetailContainer = () => {
    
    const [Item, setlistItem]=useState([])
    const [loading, setLoading]=useState(true)
    const {detailId} = useParams()
    
    useEffect(()=>{
        const list = getItemById(detailId)

        list.then(response=>{
            setlistItem(response)
            setLoading(false)
        })
        return (()=>{
            setlistItem([])
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