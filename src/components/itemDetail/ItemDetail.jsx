import React from "react";
import ItemCount from '../itemCount/ItemCount'
import './itemdetail.css'

const ItemDetail = ({detalle}) => {
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
                        <ItemCount stock={detalle.stock}/>
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