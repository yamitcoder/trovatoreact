import { useContext } from 'react'
import './cartwidget.css'
import { CartContext } from '../../context/CartContext'

const CartWidget = ({counter}) =>{
    const {cartQuantity}= useContext(CartContext)
    
    return(

        <div className="container-car">
            <img className="img-carrito" src="../img/carrito.png" alt="Carrito"/>
            { cartQuantity() > 0 && <span className='badge'>{cartQuantity()}</span> }
        
        </div>
        
    );
}
    
export default CartWidget