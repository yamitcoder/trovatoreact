import React from 'react'

import './itemlistcontainer.css'
import {useEffect, useState} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {

    const [productos, setProductos]=useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)

        getProducts()
        .then((res)=> {
            if(categoryId){
                setProductos(res.filter((prod)=> prod.categoria === categoryId))
            }else{
                setProductos(res)  
            }
        })

        .catch((error)=> console.log(error, "Todo mal"))
        .finally(()=> setLoading(false))
    },[categoryId])

    if(loading){
        return <div className='loading'> <h3>Cargando Productos...</h3> </div>
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

