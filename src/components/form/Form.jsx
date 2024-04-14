import React, { useState } from "react"

const Form =() => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [feedback, setFeedback] = useState("")

    const enviarDatos = (e) => {
        e.preventDefault()
        
        if(name === "" || email === "" || telefono === ""){
            alert("Complete el formulario")
            setFeedback("")
        }else{
            console.log({       
                nombreCompleto:name,
                email:email,
                telefono:telefono
            })

            setFeedback("Muchas gracias, nos comunicaremos con usted en breve")
        }
    }

    if(feedback!== ""){
        return <p>{feedback}</p>
    }

    return(
        <div>
            <form action="" onSubmit={enviarDatos}>
                <input type="text" placeholder="Ingrese su nombre"onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="Ingrese su mail" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="number" placeholder="Ingrese su telefono" onChange={(e)=>setTelefono(e.target.value)}/>
                <button type="submit">Enviar</button>

            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{telefono}</p>
        </div>
    )
}

export default Form