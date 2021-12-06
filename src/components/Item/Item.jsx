const Item = ({product}) => {

    return(
        <div className="card" style={{width:"18rem"}}>
            <img src="/#" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <a href="/#" className="btn btn-primary">Ver detalle</a>
            </div>
        </div>
    )    
}

export default Item