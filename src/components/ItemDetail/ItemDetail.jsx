import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = ({title, detail, img, price}) =>{


    return(

        <div className='card shadow p-3 mb-5 bg-body rounded' style={{height:520, marginRight:50, marginBottom:20, marginTop:20, alignItems:'center'}}>
            <img src={img}  style={{ height:300}} alt='Imagen de entrenamiento'/>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{detail}</p>
                <ItemCount max={4} initial={0} price={price}/>
            </div>
        </div>

    )    
}

export default ItemDetail;