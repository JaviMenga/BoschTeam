
 const ItemCount = ({addToCart, addItem, removeItem, userCount}) => {

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
                <p style={{fontWeight:'bold'}}>Cantidad: {userCount}</p>
            </div>
            <div>
                <button className='btn btn-secondary me-2' onClick={addItem}>+</button>
                <button className='btn btn-secondary me-1' onClick={removeItem}>-</button>
            </div>            
            <button className='btn btn-secondary mt-4' onClick={addToCart}>Agregar al carrito</button>
        </div>

        )
}

export default ItemCount