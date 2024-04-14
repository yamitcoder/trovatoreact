    import React from "react";
import {useEffect, useState} from 'react'
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainer = () => {

    const [detalle, setDetalle]=useState({})
    const {itemId} = useParams()
    const [cargando, setcargando] = useState(false)
    

    useEffect(()=>{
        setcargando(true)
        const collectionDesp = collection(db, "despegar")
        const referenciaDoc = doc(collectionDesp, itemId)
        getDoc(referenciaDoc)
        .then((res)=> setDetalle({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setcargando(false))

    },[itemId])


    return (
        <div>
            { cargando ? <Loader/> : <ItemDetail detalle={detalle}/>}
        </div>
    )
}
export default ItemDetailContainer