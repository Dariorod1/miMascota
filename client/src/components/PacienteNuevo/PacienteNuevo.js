import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../PacienteNuevo/PacienteNuevo.css'

const PacienteNuevo = () => {
    const[input,setInput] = useState({
        nombre:"",
        apellido:"",
        domicilio:"",
        fechanac:"",
        dni:"",
        obrasocial:""
    })

    function handleInputChange(e) {
        e.preventDefault()
        setInput({
        ...input,
        [e.target.name]: e.target.value,
        
        });
        
    }
    async function handleSubmit () {
        await axios.post("http://localhost:3000/pacientes/",input)
        console.log("los que se manda", input)
    }

  return (
    <div>
        <div className="titulo-form">
             <h1>Alta de Pacientes</h1>
        </div>
        <div className="form-alta">
            <form action=""  onSubmit={handleSubmit}>
            <p>Nombre</p>
                    <input
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                    value={input.nombre}
                    placeholder="Juan"
                    name="nombre"
                    />
            <p>Apellido </p>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    value={input.apellido}
                    placeholder="Perez"
                    name="apellido"
                    />
            <p>Domicilio </p>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    value={input.domicilio}
                    placeholder="Calle 123"
                    name="domicilio"
                    />
            <p>Fecha Nacimiento</p>
                    <input
                        placeholder = 'Fecha de Nacimiento'  
                        onChange={handleInputChange}
                        id = 'fechaEntrada'
                        type='date'
                        name="fechanac"
                        value= {input.fechanac}>
                    </input>
            <p>DNI </p>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    value={input.dni}
                    placeholder="12345678"
                    name="dni"
                    />
            <p>Obra Social </p>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    value={input.obrasocial}
                    placeholder="Sancor"
                    name="obrasocial"
                    />

                    <br></br>
                <div className="form-button">
                        <button
                        type="submit"
                        value="Crear paciente"
                        name="Enviar"
                        >
                        Registra Paciente
                        </button>
                </div>
            </form>
        </div>
    </div>
    
    
  )
}

export default PacienteNuevo