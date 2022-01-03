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

// Promise con mi array de categorias
  export const getCategories = () => {
    return new Promise ((resolve, reject) =>{
      setTimeout(()=>resolve(categories),500)
    })
  }
