import Context from '../Context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    // No me renderiza el total de productos
    const {finalQuantity}=useContext(Context)

    return (
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <Link className='btn btn-light me-md-2 mt-2' type='button' style={{display:'flex', flexDirection:'row'}} to='/cart'>
                <img src={'/assets/cart.png'} alt='cart' style={{widht:25,height:30}}/>
                <p style={{paddingLeft:10}}>{finalQuantity()}</p>
            </Link>
        </div>
    )
}

export default CartWidget;  