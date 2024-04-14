import React from "react";
import { MoonLoader } from "react-spinners"
import './loader.css'


const Loader = () =>{
    return (
        <div className="loader">
            <MoonLoader color="#550fed"/>
        </div>
        
    )
}

export default Loader