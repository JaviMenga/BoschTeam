const products = [
    {id:1, name:"Entrenamiento Aeróbico", description:"El entrenamiento aeróbico es el que se asocia con un mayor beneficio cardiovascular", price: 600},
    {id:2, name:"Entrenamiento Isométrico", description:"Este entrenamiento mejora la flexibilidad, aumenta la fuerza y reduce el riesgo de caídas",  price: 700}, 
    {id:3, name:"Entrenamiento de Fortalecimiento de Huesos", description:"Son entrenamientos dirigidos a levantar o soportar peso, los cuales fortalecen los huesos",  price: 800}
]


// Promise con mi array de productos
export const getProduct = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=> resolve(products), 3000)
    })
}
