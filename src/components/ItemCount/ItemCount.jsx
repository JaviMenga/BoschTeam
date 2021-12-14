import { useState } from 'react';

const ItemCount = ({max, initial, price}) => {

const [count, setCount] = useState(0)

const addItem = () => {
if(count<max){
    setCount(count +1)
   }
}

const removeItem = () => {
    if (count>initial){
        setCount(count -1)
    }
}

// esta funcion debe pasarse como props y ser declarada en el parent
const onAdd =() =>{
    if(count!==initial){
        console.log('se agregó el servicio al carrito')
    }else{
        console.log('el numero ingresado no es válido, por favor agregar al menos 1 servicio ')
    }
}

return(
    <div style={{display:'flex', justifyContent:'center'}}>
        <a href='/#' className='btn btn-secondary me-4' onClick={onAdd}>Comprar: {count}</a>
        <button className='btn btn-secondary me-2' onClick={addItem}>+</button>
        <button className='btn btn-secondary me-2' onClick={removeItem}>-</button>
        <button className='btn btn-secondary me-2'>Total: ${price*count}</button>
    </div>

    )}

export default ItemCount;