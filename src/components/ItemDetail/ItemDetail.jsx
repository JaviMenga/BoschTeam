import { width } from "dom-helpers";

const ItemDetail = ({title, detail, img, price}) =>{


    return(

        <div className="card" style={{height:470, marginRight:50, alignItems:"center"}}>
            <img src={img}  style={{ height:300}} alt="Imagen de entrenamiento"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{detail}</p>
                <button className="btn btn-primary card-img-top"> Solicitar $ {price}</button>
            </div>
        </div>

    )    
}

export default ItemDetail;