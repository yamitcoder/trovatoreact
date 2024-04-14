import React from 'react'
import {useState} from 'react'
import './count.css'

const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount]= useState(0)

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0){

            setCount(count -1)
        }
    }

    const enviarCantidad = () =>{
        onAdd(count)
    }

    return (
        <>
        <div className="count">
            <button className="count-restar" onClick={restar}>-</button>
            <span className="contador">{count}</span>
            <button className="count-sumar" onClick={sumar}>+</button>
        </div>

        {<button className="comprar" disabled={stock === 0 || count === 0} onClick={enviarCantidad}>Comprar</button>}
        </>
    )

}

export default ItemCount