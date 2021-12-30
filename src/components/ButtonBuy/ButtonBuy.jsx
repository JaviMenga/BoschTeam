import { Link } from 'react-router-dom'


const  ButtonBuy = () =>{
    
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to={'/cart'} className='btn btn-secondary me-2'>Ir al carrito</Link>
        </div>
    )

}

export default ButtonBuy;