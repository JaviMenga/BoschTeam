import Item from '../Item/Item'

const ItemList = ({product=[]}) =>{
    return(
        <ul style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap', marginTop:50}}>
            {product.map( p => (
                <Item key={p.id} title={p.name} img={p.img} price={p.price} id={p.id}/>
            ))}
        </ul>
    )
}

export default ItemList