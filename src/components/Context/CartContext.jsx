import React, {useState} from 'react'

const Context = React.createContext()

export const CartContextProvider= ({children}) =>{

    const [cart, setCart]=useState([])
    const [totalQuantity, setTotalQuantity]=useState(0)

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
        finalQuantity()
        console.log(totalQuantity)
    }
    
    const removeToCart = (Item) =>{
        let newCart = cart.filter(element=>element.id !==Item.id)
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
        setTotalQuantity(parcialQuantity)
    }

    return(
        <Context.Provider value ={{cart, addToCart, removeToCart, cleanCart, isInCart, finalQuantity}}>
            {children}
        </Context.Provider>
    )
}

export default Context