import Item from '../Item/Item'

const ItemList = ({product}) =>{
    
    return(
        <ul>
            {product.map( p => (
                <Item key={p.id} title={p.name} description={p.description} price={p.price}/>
            ))}
        </ul>
    )
}

export default ItemList