
// Array de productos simulando una API
const products = [
    {
      id:1, 
      name:'Entrenamiento Aeróbico', 
      description:'El entrenamiento aeróbico es el que se asocia con un mayor beneficio cardiovascular', 
      price: 600, 
      img: require('./assets/img1.jpg').default, 
      detail: 'El entrenamiento aeróbico aumenta la velocidad a la que el oxígeno inhalado pasa de los pulmones y el corazón al torrente sanguíneo para que lo usen los músculos. Los atletas que tienen un acondicionamiento físico aeróbico pueden ejercitarse más tiempo y más arduamente antes de sentirse cansados',
      category:'Servicios',
      stock:4
    },
    {
      id:2, 
      name:'Entrenamiento Isométrico', 
      description:'Este entrenamiento mejora la flexibilidad, aumenta la fuerza y reduce el riesgo de caídas',  
      price: 700, 
      img: require('./assets/img2.jpg').default, 
      detail:'Los ejercicios isométricos son contracciones de un músculo o grupo de músculos específico. Durante los ejercicios isométricos, el músculo no cambia de largo de manera obvia, y la articulación afectada no se mueve. Los ejercicios isométricos ayudan a mantener la fuerza.',
      category:'Servicios',
      stock:4
    }, 
    {
      id:3, 
      name:'Entrenamiento de Fortalecimiento de Huesos', 
      description:'Son entrenamientos dirigidos a levantar o soportar peso, los cuales fortalecen los huesos',  
      price: 800, 
      img: require('./assets/img3.jpg').default, 
      detail:'Estos incluyen levantar pesas, caminar, hacer senderismo, correr, subir escaleras, jugar tenis y bailar. Los ejercicios de resistencia, como levantar pesas, también pueden fortalecer los huesos.',
      category:'Servicios',
      stock:4
    },
    {
      id:4, 
      name:'Remera Bosch Team Negra', 
      description:'Remera con el logo "Bosch Team" estampado al frente y al dorso',  
      price: 1200, 
      img: require('./assets/img4.jpg').default, 
      detail:'Remera confeccionado en tejido sin costuras 75% algodón / 23% poliéster / 2% elastano. Diseño casi sin costuras que evita los roces y la irritación de la piel. Estampado en Serigrafía',
      category:'Merchandising',
      stock:30
    },
    {
      id:5, 
      name:'Remera Bosch Team Blanca', 
      description:'Remera con el logo "Bosch Team" estampado al frente y al dorso',  
      price: 1200, 
      img: require('./assets/img5.jpg').default, 
      detail:'Remera confeccionado en tejido sin costuras 75% algodón / 23% poliéster / 2% elastano. Diseño casi sin costuras que evita los roces y la irritación de la piel. Estampado en Serigrafía.',
      category:'Merchandising',
      stock:20
    },
    {
      id:6, 
      name:'Remera Bosch Team Gris', 
      description:'Remera con el logo "Bosch Team" estampado al frente y al dorso',  
      price: 1200, 
      img: require('./assets/img6.jpg').default, 
      detail:'Remera confeccionado en tejido sin costuras 75% algodón / 23% poliéster / 2% elastano. Diseño casi sin costuras que evita los roces y la irritación de la piel. Estampado en Serigrafíaos.',
      category:'Merchandising',
      stock:15
    }
]
// Array de categorias simulando una API
const categories=[
  {
  id:'Servicios',
  category:'Servicios'
  }, 
  {
  id:'Merchandising', 
  category:'Merchandising'
  }
]


// Promise con mi array de productos
export const getProduct = () => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=> resolve(products), 500)
    })
}

// Promise con mi array de productos filtrado por ID
export const getItemById = (detailId) => {
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>resolve(products.find(item=>parseInt(item.id) === parseInt(detailId))),500)
    })
  }

// Promise con mi array de productos filtrado por CATEGORIAS
  export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>resolve(products.filter(item=>item.category === categoryId)),500)
    })
  }

// Promise con mi array de categorias
  export const getCategories = () => {
    return new Promise ((resolve, reject) =>{
      setTimeout(()=>resolve(categories),500)
    })
  }
