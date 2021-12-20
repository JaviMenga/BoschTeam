import ItemCount from '../ItemCount/ItemCount'
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import { useState } from 'react'

const ItemDetail = ({Item}) =>{


    const [userCount, setUserCount]= useState (0)

    const addItem = () => {
        if(userCount<max){
            setUserCount(userCount +1)
        }
    }

    const removeItem = () => {
        if (userCount>initial){
            setUserCount(userCount -1)
        }
    }
    
    const onAdd =() =>{
        if(userCount!==initial){
            localStorage.setItem('cart', userCount)
        }else{
            alert('el numero ingresado no es válido, por favor agregar al menos 1 servicio ')
        }
    }
    
    const initial=0
    const max=Item.stock

    return(

        <div className='card shadow p-3 mb-5 bg-body rounded' style={{height:570, marginRight:50, marginBottom:20, marginTop:20, alignItems:'center'}}>
            <img src={Item.img}  style={{ height:300}} alt='Imagen de entrenamiento'/>
            <div className='card-body'>
                <h5 className='card-title'>{Item.title}</h5>
                <p className='card-text'>{Item.detail}</p>
                {userCount!= max ? <ItemCount onAdd={onAdd} addItem={addItem} removeItem={removeItem} userCount={userCount}/> : <ButtonBuy/>}
            </div>
        </div>

    )    
}

export default ItemDetail;