import ItemDetail from '../components/ItemDetail/ItemDetail.jsx'
import {useState, useEffect} from 'react'
import {getItemById} from '../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [listItem, setlistItem]=useState([])
    const {detailId} = useParams()
    
    useEffect(()=>{
        const list = getItemById(detailId)

        list.then(response=>{
            setlistItem(response)
        })
        return (()=>{
            setlistItem([])
        })
    },[detailId])


// Contenedor
    return ( 
        <div style={{marginLeft:30}}>
            <ItemDetail title={listItem.title} detail={listItem.detail} img={listItem.img} price={listItem.price}/>
        </div>
    )
}


export default ItemDetailContainer;