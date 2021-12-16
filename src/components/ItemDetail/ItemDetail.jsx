import ItemCount from '../ItemCount/ItemCount.jsx'
import ButtonBuy from '../ButtonBuy/ButtonBuy.jsx'
import { useState } from 'react'


const ItemDetail = ({Item, UserCount}) =>{

    const [userCount,setUserCount]=useState(0)
    console.log(UserCount)

    const Count = userCount > 0 ? ButtonBuy : ItemCount

    return(

        <div className='card shadow p-3 mb-5 bg-body rounded' style={{height:570, marginRight:50, marginBottom:20, marginTop:20, alignItems:'center'}}>
            <img src={Item.img}  style={{ height:300}} alt='Imagen de entrenamiento'/>
            <div className='card-body'>
                <h5 className='card-title'>{Item.title}</h5>
                <p className='card-text'>{Item.detail}</p>
                <Count max={Item.stock} initial={0}/>
            </div>
        </div>

    )    
}

export default ItemDetail;