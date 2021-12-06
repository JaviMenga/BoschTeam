import Item from '../Item/Item'

const ItemList = ({product}) =>{
    return(
        <ul style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:50}}>
            {product.map( p => (
                <Item key={p.id} title={p.name} description={p.description} price={p.price} img={p.img}/>
            ))}
        </ul>
    )
}

export default ItemList