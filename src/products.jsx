
const products = [
    {id:1, name:"Entrenamiento Aeróbico", description:"El entrenamiento aeróbico es el que se asocia con un mayor beneficio cardiovascular", price: 600, img: require("./assets/img1.jpg").default, detail: "El entrenamiento aeróbico aumenta la velocidad a la que el oxígeno inhalado pasa de los pulmones y el corazón al torrente sanguíneo para que lo usen los músculos. Los atletas que tienen un acondicionamiento físico aeróbico pueden ejercitarse más tiempo y más arduamente antes de sentirse cansados"},
    {id:2, name:"Entrenamiento Isométrico", description:"Este entrenamiento mejora la flexibilidad, aumenta la fuerza y reduce el riesgo de caídas",  price: 700, img: require("./assets/img2.jpg").default, detail:"Los ejercicios isométricos son contracciones de un músculo o grupo de músculos específico. Durante los ejercicios isométricos, el músculo no cambia de largo de manera obvia, y la articulación afectada no se mueve. Los ejercicios isométricos ayudan a mantener la fuerza."}, 
    {id:3, name:"Entrenamiento de Fortalecimiento de Huesos", description:"Son entrenamientos dirigidos a levantar o soportar peso, los cuales fortalecen los huesos",  price: 800, img: require("./assets/img3.jpg").default, detail:"Estos incluyen levantar pesas, caminar, hacer senderismo, correr, subir escaleras, jugar tenis y bailar. Los ejercicios de resistencia, como levantar pesas, también pueden fortalecer los huesos."}
]


// Promise con mi array de productos
export const getProduct = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=> resolve(products), 3000)
    })
}

export const getItem = () => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(products[0]), 2000)
  })
}