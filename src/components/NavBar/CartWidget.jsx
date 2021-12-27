import cart from '../../assets/cart.png'
import CartContext from '../Context/CartContext'
import { useContext } from 'react';

const CartWidget = () => {
    // No me renderiza el total de productos
    const {totalQuantity}=useContext(CartContext)

    return (
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button className='btn btn-light me-md-2 mt-2' type='button' style={{display:'flex', flexDirection:'row'}}>
                <img src={cart} alt='cart' style={{widht:25,height:30}}/>
                <p style={{paddingLeft:10}}>{totalQuantity}</p>
            </button>
        </div>
    )
}

export default CartWidget;  