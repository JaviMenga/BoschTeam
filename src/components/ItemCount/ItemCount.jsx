import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({max, initial}) => {

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
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
                <p style={{fontWeight:'bold'}}>Cantidad: {count}</p>
            </div>
            <div>
                <button className='btn btn-secondary me-2' onClick={addItem}>+</button>
                <button className='btn btn-secondary me-1' onClick={removeItem}>-</button>
            </div>            
            <button className='btn btn-secondary mt-4'>Agregar al carrito</button>
        </div>

        )
}

export default ItemCount;