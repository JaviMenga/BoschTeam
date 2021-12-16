import { Link } from 'react-router-dom'
import { useState } from 'react'


const  ButtonBuy = () =>{
    const [count, setCount] =useState(0)

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to={'/cart'} className='btn btn-secondary me-2'>Comprar</Link>
        </div>
    )

}

export default ButtonBuy;