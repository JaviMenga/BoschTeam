import {React, useContext} from 'react'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () =>{

    const {cart, removeFromCart, cleanCart} = useContext(CartContext)
    
    if(cart.length<1){
        return (
            <div style={{display:"Flex", flexDirection:"row", justifyContent:"center"}}>
                <Link to={'/'} className="btn btn-secondary m-5">Agregar productos</Link>
            </div> )   
    }

    // const handleRemoveFromCart = (e) => {
        
    //     console.log('entré a Remove')
    //     const ItemId = e.target.getAttribute('id')
    //     removeFromCart(ItemId)
    // }

    return(<>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(element => (
                        <tr key={element.item.id}>
                            <td><button className='btn btn-secondary me-2'>+</button>{element.cantidad}<button className='btn btn-secondary ms-2'>-</button></td>
                            <td>{element.item.name}</td>
                            <td>$ {element.item.price*element.cantidad}</td>
                            <td><button id ={element.item.id} className='btn btn-secondary' onClick={() => {removeFromCart(element.item.id)}}>Eliminar</button></td>
                        </tr>
                        ))
                }
            </tbody>
        </table>
        <button className='btn btn-secondary' onClick={cleanCart}>Vaciar carrito</button>
        </>
            )
}

export default Cart
