import React from "react"
import { useCounter } from "../hooks/useCounter"
import './count.css'

const ItemCount = ({stock}) =>{
    const {count, restar, sumar}= useCounter(stock)

    const onAdd = () =>{
        if(stock > 0 ){
        } else {
            alert("No Hay Stock")
        }
    }

    return (
        <>
        <div className="count">
            <button className="count-restar" onClick={restar}>-</button>
            <span className="contador">{count}</span>
            <button className="count-sumar" onClick={sumar}>+</button>
        </div>

        <button className="comprar" onClick={onAdd}>Comprar</button>
        </>
    )

}

export default ItemCount