import ItemCount from '../ItemCount/ItemCount'
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import { useState, useContext } from 'react'
import CartContext from '../Context/CartContext'

const ItemDetail = ({Item}) =>{
    const [userCount, setUserCount]= useState (1)
    const [buy, setBuy] = useState(false)
    const {addToCart}=useContext(CartContext)

// Funciones para el contador hijo que las paso por props
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

// Funciones para agregar al carrito
    const handleAddToCart = () => {
        setBuy(true)
        addToCart(Item, userCount)
        
    }
    
    const initial=1
    const max=Item.stock

    return(

        <div className='card shadow p-3 mb-5 bg-body rounded' style={{height:570, marginRight:50, marginBottom:20, marginTop:20, alignItems:'center'}}>
            <img src={Item.img}  style={{ height:300}} alt='Imagen de entrenamiento'/>
            <div className='card-body'>
                <h5 className='card-title'>{Item.title}</h5>
                <p className='card-text'>{Item.detail}</p>
                {buy? <ButtonBuy/>:<ItemCount addToCart={handleAddToCart} addItem={addItem} removeItem={removeItem} userCount={userCount}/>}
            </div>
        </div>

    )    
}

export default ItemDetail;