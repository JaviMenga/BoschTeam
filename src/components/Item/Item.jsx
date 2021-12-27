import {Link} from 'react-router-dom'

const Item = (product) => {
    return(
        <div className='card shadow p-3 mb-5 bg-body rounded' style={{width:'17rem', marginRight:50}}>
            <img src={product.img} className='card-img-top' style={{height:'35vh'}} alt='Imagen de entrenamiento'/>
            <div className='card-body' style={{height:170}}>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>$ {product.price}</p>
            </div>            
            <Link className='btn btn-secondary card-img-top btn-sm' to={`/detail/${product.id}`} > Ver detalle</Link>
        </div>
    )    
}

export default Item