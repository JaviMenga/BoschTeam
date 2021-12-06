import Item from '../Item/Item'

const ItemList = ({product}) =>{
    
    return(
        <ul>
            {product.map((prod) => {
                <Item title={prod.name} description={prod.description} price={prod.price}/>
            })}
        </ul>
    )
}

export default ItemList