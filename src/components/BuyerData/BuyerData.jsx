const BuyerData = ({handleSaveContact, saveContact, handleModifyContact}) => {

    return(
    <>
        {saveContact? 
            <button className='btn btn-danger ms-2' onClick={handleModifyContact}>Editar Contacto</button>
                :
            <form className='mt-4 container' style={{display:'flex', flexDirection:'column', alignItems:'start'}}>
                <h1 className="mb-4">Contacto</h1>
                <div className="form-floating mb-3">
                    <input type="phone" className="form-control" id="phone" placeholder="Teléfono" style={{width:'50vw'}}/>
                    <label htmlFor="phone">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="address" placeholder="Address" style={{width:'50vw'}}/>
                    <label htmlFor="address">Dirección</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{width:'50vw'}}></textarea>
                    <label htmlFor="floatingTextarea">Comentarios</label>
                </div>
                <div>
                    <input className ="btn btn-secondary" type="submit"value="Confirmar" onClick={handleSaveContact}/>
                </div>
            </form>
        }
        
    </>
    )
}

export default BuyerData