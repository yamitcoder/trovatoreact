import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './cartview.css'
import { Link } from "react-router-dom"

const CartView = () =>{
    const {cart, removeItem, cartPriceTotal, clear}= useContext(CartContext)
    return (
        <div className="cart-view">
            <h2>Tu carrito</h2>
            <div>
                {cart.map((compra) =>{
                    return(
                        <div className="model" key={compra.id}>
                            <img className="img-view" src={compra.imagen} alt={compra.name}/>
                            <span className="name-view">{compra.name}</span>
                            <span className="quantity-view">Cantidad: X{compra.quantity}</span>
                            <span className="precio-view">Costo por Persona: ${compra.precio},00</span>
                            <span className="total-view">Precio final: ${compra.precio * compra.quantity},00</span>

                            <button className="remove" onClick={()=>removeItem(compra.id)}><img className="icon-duracion" src="../papelera.svg" alt="" /></button>
                        </div>
                    )
                })}
            </div>

            <p className="pagar">Total a pagar: ${cartPriceTotal()},00</p>

            <div className="botones">
            <button className="vaciar" onClick={clear}>Eliminar Carrito</button>
            <Link className="finalizar" to="/checkout">Finalizar Compra</Link>
            </div>
            
        </div>

        
    )
}

export default CartView