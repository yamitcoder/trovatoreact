import React from 'react'

import './itemlistcontainer.css'
import {useEffect, useState} from 'react'
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

function ItemListContainer({greeting}) {

    const [productos, setProductos]=useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        const viajesCollection = categoryId ? query(collection(db, "despegar"), where("categoria", "==", categoryId)) : collection(db, "despegar")

        getDocs(viajesCollection)
        .then((res)=>{
            const list = res.docs.map((viajes)=>{
                return{
                    id:viajes.id,
                    ...viajes.data()
                }
            })
        setProductos(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    if(loading){
        return <Loader/> 
    }

    return(
        <div className='caja-list'>
            
            <div className='container-list'>
            {categoryId
            ? <h1 className='categoria'>{greeting} <span>{categoryId}</span></h1> : <h1>{greeting}</h1>
            }
            <ItemList productos={productos}/>
            </div>

        </div>  
    );
}

export default ItemListContainer

