import CartContext from '../Context/CartContext'
import userContext from '../Context/userContext'
import {React, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import BuyerData from '../BuyerData/BuyerData'
import {DataBase} from '../../Services/Firebase/Firebase'
import {addDoc, collection, getDoc, doc, Timestamp, writeBatch} from 'firebase/firestore'

const Cart = () =>{

    const {cart,removeFromCart, cleanCart} = useContext(CartContext)
    const {user}=useContext(userContext)

    const [contact, setContact] = useState(false)
    const [saveContact, setSaveContact]=useState(false)

    const batch = writeBatch(DataBase)
    let totalPrice = 0
    const outOfStock=[]
    
    // Renderizo un botón para agregar productos en caso de no haber agregado ninguno al momento de ingresar al carrito de compras
    if(cart.length<1){
        return (
            <div style={{display:"Flex", flexDirection:"row", justifyContent:"center"}}>
                <Link to={'/'} className="btn btn-secondary m-5">Agregar productos</Link>
            </div> )   
    }

    // Función que suma el total de precio de todos los productos y cantidades seleccionadas en carrito
    const handleTotalPrice = () =>{
        cart.map(e=>(
            totalPrice = totalPrice += (e.item.price*e.cantidad)
                ))
        return(
            totalPrice
        )
    }

    // Función que permite que, al tocar el boton 'Guardar' del formulario, se renderice un boton de 'Contacto Guardado'
    const handleSaveContact = (e) =>{
        e.preventDefault()
        setSaveContact(true)
    }

    // Función que permite que, al tocar el boton 'Editar Contacto' del formulario, se renderice nuevamente el formulario
    const handleModifyContact = () =>{
        setSaveContact(false)
    }

    // Función que permite ejecutar la orden de pedido y enviarla a FireBase
    const BuyerOrder = () =>{
        const objOrder = {
            buyer: user,
            items: cart,
            total: totalPrice,
            phone: 1136123444,
            address: 'Calle Siempreviva 123',
            coments: 'coment',
            date: Timestamp.fromDate(new Date())
        }

        // const outOfStock = []

        objOrder.items.forEach((cart) =>{
            getDoc(doc(DataBase, 'products', cart.item.id)
            ).then((documentSnapshot)=>{
                    if(documentSnapshot.data().stock >= cart.cantidad){
                        console.log('hay stock')
                        batch.update(doc(DataBase, 'products', documentSnapshot.id), {
                            stock: documentSnapshot.data().stock - cart.cantidad
                        })
                    }else{
                        console.log('no hay stock')
                        outOfStock.Push({id: documentSnapshot.id, ...documentSnapshot.data()})
                        console.log(outOfStock)
                    }
                }).catch(error=>{
                console.log(error, 'error en ejecución de la orden')
                    })
        })

            
            if(outOfStock.length === 0){
                console.log('outOfStock === 0')
                addDoc(collection(DataBase, 'orders'), objOrder)
                    .then(({id}) =>{
                        console.log('commiteo el batch')
                        batch.commit()
                            .then(()=>{console.log(`El Id de su orden es ${id}`)
                            })
                        }).catch((error)=>{
                            console.log(error, 'error realizando la orden')
                            }).finally(()=>{
                                cleanCart()
                                })
            }else{
                console.log('no es posible realizar tu compra porque alguno de los items no tienen stock solicitado')
            }
    }

    return(
    <>
        <table className="table container">
            <thead>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio por Unidad</th>
                    <th scope="col">Precio Final</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(element => (
                        <tr key={element.item.id}>
                            <td>{element.cantidad}</td>
                            <td>{element.item.name}</td>
                            <td>${element.item.price}</td>
                            <td>${element.item.price*element.cantidad}</td>
                            <td><button id ={element.item.id} className='btn btn-secondary' onClick={() => {removeFromCart(element.item.id)}}>X</button></td>
                        </tr>
                        ))
                }
                <tr>
                    <td colSpan={2}></td>
                    <td><strong>Total</strong></td>
                    <td>${handleTotalPrice()}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-secondary' style={{marginLeft:"30vw"}} onClick={cleanCart}>Vaciar carrito</button>
        <button className='btn btn-secondary ms-2' onClick={BuyerOrder}>Confirmar compra</button>
        {contact? <BuyerData handleSaveContact={handleSaveContact} saveContact={saveContact} handleModifyContact={handleModifyContact}/>: <button className='btn btn-success ms-2' onClick={()=>{setContact(true)}}>Ingresar Datos de comprador</button>}
    </>
    )
}

export default Cart
