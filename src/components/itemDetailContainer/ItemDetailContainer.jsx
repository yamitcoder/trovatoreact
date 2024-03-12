import React from "react";
import {useEffect, useState} from 'react'
import { getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [detalle, setDetalle]=useState({})
    const {itemId} = useParams()
    const [cargando, setcargando] = useState(false)
    

    useEffect(()=>{
    setcargando(true)
    getProducts()
        .then((res)=> setDetalle(res.find((item)=> item.id === itemId)))
        .catch((error)=> console.log(error, "Hubo un problema, intenten más tarde"))
        .finally(()=> setcargando(false))
    },[itemId])

    if(cargando){
        return <div className='loading'> <h3>Cargando detalle...</h3> </div>
    }

    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}
export default ItemDetailContainer