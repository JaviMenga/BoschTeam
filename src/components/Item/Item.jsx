const Item = (product) => {
    return(
        <div className="card" style={{width:"18rem", marginRight:50}}>
            <img src={product.img} className="card-img-top" style={{height:"35vh"}} alt="Imagen de entrenamiento"/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <a href="/#" className="btn btn-primary card-img-top">Ver detalle</a>
            </div>
        </div>
    )    
}

export default Item