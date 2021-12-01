import { useState } from "react";

const ItemCount = ({max, initial}) => {

const [count, setCount] = useState(0)

const addItem = () => {
if(count<max){
    console.log("entre")
    setCount(count +1)

   }

}

const removeItem = () => {

    if (count>initial){

        setCount(count -1)

    }    
    
}

const onAdd =() =>{
    if(count!=initial){

        console.log("se agregó el servicio al carrito")

    }else{

        console.log("el numero ingresado no es válido, por favor agregar al menos 1 servicio ")

    }
    
}

return(

    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Entrenamiento Full Size</h5>
            <p className="card-text">El entrenamiento consiste en una clase de 1 hora. En dicho horario se realizará actividad intensiva, con equipamiento facilitado por el profesor.</p>
            <p className="card-text">Por decisión del entrenador, no se puede solicitar más de un mes del mismo tipo de entrenamiento, ya que el mismo debe llevar un seguimiento y debe ser habilitada la continuidad por el mismo.</p>
            <a href="/#" className="btn btn-primary me-4" onClick={onAdd}>Solicitar clases: {count}</a>
            <button className="btn btn-primary me-2" onClick={addItem}>+</button>
            <button className="btn btn-primary me-2" onClick={removeItem}>-</button>
        </div>
    </div>

    )}

export default ItemCount;