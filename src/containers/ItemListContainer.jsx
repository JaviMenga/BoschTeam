import ItemCount from "../components/ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
            
    return ( 
        <div style={{display:'flex', flexDirection:"column", alignItems:"center", marginTop:50}}>
            <h1>{greeting}</h1>
            <ItemCount max="4" initial="0"/>
        </div>
    )}
export default ItemListContainer;