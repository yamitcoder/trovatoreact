import React, { useContext, useState } from "react";
import ItemCount from '../itemCount/ItemCount'
import './itemdetail.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

const ItemDetail = ({detalle}) => {
const [compra, setCompra] = useState(false)

const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(detalle,cantidad)
        setCompra(true)
    }
    
    return (

        <div className="caja-details">

            <div className="details">
                <div className="grid">
                    <div>
                        <img className="imagen-detail" src={detalle.imagen} alt={detalle.name}/>
                    </div>

                    <div>
                        <p className="categoria-detail">{detalle.categoria}</p>
                        <h2 className="titulo-detail">{detalle.name}</h2>
                        <p className="d-1">Precio por adulto desde</p>
                        <p className="precio-detail">${detalle.precio},00</p>
                        <p className="d-2">Incluye Impto. PAIS y Percepción.</p>
                        
                        { detalle.stock < 3 && <p className="apurate">Apurate! Quedan pocas plazas ✈️</p>}

                        { compra && <p className="agregaste">Ya agregaste {detalle.name} en el carrito</p>}
                        
                        { compra ? <Link className="carrito" to="/cart">Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}

                    </div>
                    
                </div>

                <div className="descripcion-detail">
                    <h2 className="titulo-descipcion">Descripción:</h2>
                    <p className="texto-descripcion">{detalle.descripcion}</p>

                    <div className="duracion-detail">
                        <img className="icon-duracion" src="../reloj-tres.svg" alt="" />
                        <p className="duracion">Duración: {detalle.duracion}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default ItemDetail