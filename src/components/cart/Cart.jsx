import React, { useContext } from "react";
import CartView from "../cartView/CartView";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import './cart.css'

const Cart = () =>{
    const {cart}= useContext(CartContext)
    return (
        <div className="cart">
            {!cart.length 
            ? <div>
                    <h2>Tu carrito está vacio</h2>
                    <h3>Te invitamos a ver todos nuestros productos</h3>
                    <Link className="botom" to="/">Ir a comprar!</Link>
                </div> 
                : <CartView/>}
        </div>
    )
}

export default Cart