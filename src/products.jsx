
const products = [
    {id:1, name:"Entrenamiento Aeróbico", description:"El entrenamiento aeróbico es el que se asocia con un mayor beneficio cardiovascular", price: 600, img: require("./assets/img1.jpg").default},
    {id:2, name:"Entrenamiento Isométrico", description:"Este entrenamiento mejora la flexibilidad, aumenta la fuerza y reduce el riesgo de caídas",  price: 700, img: require("./assets/img2.jpg").default}, 
    {id:3, name:"Entrenamiento de Fortalecimiento de Huesos", description:"Son entrenamientos dirigidos a levantar o soportar peso, los cuales fortalecen los huesos",  price: 800, img: require("./assets/img3.jpg").default}
]

products.map(p=>(console.log(p.img)))

// Promise con mi array de productos
export const getProduct = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=> resolve(products), 3000)
    })
}
