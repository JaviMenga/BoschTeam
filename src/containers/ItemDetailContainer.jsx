import ItemDetail from "../components/ItemDetail/ItemDetail.jsx"
import {useState, useEffect} from 'react'
import {getItem} from '../products'

const ItemDetailContainer = () => {
    
    const [listItem, setListItem]=useState([])

    useEffect(()=>{
        const list = getItem()

        list.then(response=>{
            setListItem(response)
        })
        return (()=>{
            setListItem([])
        })
    },[])


// Contenedor
    return ( 
        <div>
            <ItemDetail title={listItem.title} detail={listItem.detail} img={listItem.img} price={listItem.price}/>
        </div>
    )
}


export default ItemDetailContainer;