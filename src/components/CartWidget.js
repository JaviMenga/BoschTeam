import cart from './multimedia/cart.png'



const CartWidget = () => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-light me-md-2" type="button">
                <img src={cart} alt="cart" style={{widht:25,height:30}}/>
                <p style={{paddingLeft:10}}>4</p>
            </button>
        </div>
    )
}

export default CartWidget;