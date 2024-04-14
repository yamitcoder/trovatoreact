import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { Link } from "react-router-dom"
import './checkout.css'

const Checkout = () =>{

    const [user, setUser] = useState ({})
    const [validateEmail, setValidatemail] = useState ("")
    const [orderId, setOrderId] = useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)
   
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email){
            alert("Los campos son obligatorios")
        }else if(user.email !== validateEmail){
            alert("Los mails deben ser iguales")
        }else{
            let order ={
                user,
                items: cart,
                total:cartPriceTotal(),
                date:serverTimestamp()
            }

            const ventas = collection(db, 'orders')
            //agregamos el doc
            addDoc(ventas,order)
            .then((res)=> {
                //Actualizar el stock
                cart.forEach((item)=>{
                    const docRef = doc(db, 'despegar', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                })
               setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }

    }

    return (
    <div>
        {orderId !== "" ?
        <div className="orden">
            <h4 className="h4-orden">Generaste tu orden</h4>
            <h5 className="h5-orden">El id es: {orderId}</h5>
            <Link className="volver" to = "/">Volver a la Home</Link>
        </div>
        :
        <div className="checkout">
            <h3 className="h3-checkout">Completá el formulario</h3>
            <p className="p-checkout">Estás a un paso de terminar tu compra</p>
            <form className="form-checkout" action="" onSubmit={finalizarCompra}>

                <input className="input" name="name" type="text" placeholder="Ingrese su nombre" onChange={userData}/>
                <input className="input" name="lastname" type="text" placeholder="Ingrese su apellido" onChange={userData}/>
                <input className="input" name="email" type="email" placeholder="Ingrese su mail" onChange={userData}/>
                <input className="input" name="second-email" type="email" placeholder="Repita su Email" onChange={(e)=>setValidatemail(e.target.value)}/>
                <input className="input" name="phone" type="number" placeholder="Ingrese su telefono" onChange={userData}/>
                <input className="input" name="address" type="tel" placeholder="Ingrese su direccion" onChange={userData}/>
                <button className="submit" type="submit">Enviar</button>

            </form>
        </div>}
    </div>
    )
}

export default Checkout