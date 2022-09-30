import React from 'react'
import { useNavigate } from 'react-router-dom'


function Porfolio() {

    const navigate = useNavigate()
    const obj = {
        nombre: "Florencia Oldani",
        profesion: "Developer Full Stack",
        saludo: "gracias por su interés en conocerme, ingrese asi puede seguir haciendolo"
    }

    const ingresar = (){
        navigate("/home")
    }
  return (
    <div>
        <h1>PORFOLIO</h1>
        <h2>{obj.nombre}</h2>
        <h2>{obj.profesion}</h2>
        <h2>{obj.saludo}</h2>
        <button onClick={ingresar}>INGRESAR</button>
    </div>
  )
}

export default Porfolio