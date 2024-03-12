import React from 'react'
import { useEffect, useState } from 'react'

const FetchContainer = () => {

    const [personajes, setPersonajes]= useState([])
   // const [estudiantes, setEstudiantes]= useState([])

   // useEffect (()=>{
        //fetch("https://hp-api.onrender.com/api/characters/")
        //.then((res)=>res.json())
        //.then((result)=> setEstudiantes(result))
        //.catch((error)=> console.log(error))

    //},[])

    //console.log(estudiantes)

    useEffect(()=>{

        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>setPersonajes(data.results))
        .catch((error)=> console.log(error))

    },[])

console.log(personajes, 'personajes')
  
return (
    <div>
        {personajes.map((personaje)=> {
            return(
                <div key={personaje.id}>
                    <p>{personaje.name}</p>
                    <p>{personaje.status}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FetchContainer