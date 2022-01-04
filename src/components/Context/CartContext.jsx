import React, {useState} from 'react'

const Context = React.createContext()

export const CartContextProvider= ({children}) =>{

    const [cart, setCart]=useState([])
    console.log(cart)

    const addToCart = (Item, cantidad) =>{
        const ok = isInCart(Item)
        if(ok){
            let ProductFound = cart.find(element=>element.item===Item)
            ProductFound.cantidad += cantidad
            let cartAux = cart.filter(element=>element.item !== Item)
            setCart([...cartAux, ProductFound])
        }else{
            setCart([...cart, {item:Item, cantidad:cantidad}])
        }
    }
    
        const removeFromCart = (ItemId) => {
            let newCart = cart.filter(element=>element.item.id !== ItemId)
            setCart([...newCart])
            
        }

    const cleanCart = () =>{
        setCart([])
    }

    const isInCart = (Item) =>{
        return cart.some(product => product.item === Item)

    }

    const finalQuantity = () =>{
        let parcialQuantity=0
        cart.forEach(element=>{parcialQuantity+=element.cantidad})
        return parcialQuantity
    }

    return(
        <Context.Provider value ={{cart, addToCart, removeFromCart, cleanCart, isInCart, finalQuantity}}>
            {children}
        </Context.Provider>
    )
}

export default Context