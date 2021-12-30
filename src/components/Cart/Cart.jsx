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
    let totalPrice = 0
    cart.map(e=>(
        totalPrice = totalPrice += (e.item.price*e.cantidad))
    )

    return(<>
        <table className="table container">
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
                            <td>{element.cantidad}</td>
                            <td>{element.item.name}</td>
                            <td>$ {element.item.price*element.cantidad}</td>
                            <td><button id ={element.item.id} className='btn btn-secondary' onClick={() => {removeFromCart(element.item.id)}}>Eliminar</button></td>
                        </tr>
                        ))
                }
                <tr>
                    <td></td>
                    <td><strong>Total</strong></td>
                    <td>$ {totalPrice}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-secondary' style={{marginLeft:"45vw"}} onClick={cleanCart}>Vaciar carrito</button>
        </>
            )
}

export default Cart
