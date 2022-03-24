import React, {useEffect,useState} from 'react'
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import {Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const Pacientes = () => {
  const [pacientes,setPacientes] = useState([])
  const [modalActualizar, setModalActualizar] = useState(false)
  const [modalInsertar, setmodalInsertar] = useState(false)
  const [form, setForm] = useState({
      nombre:"",
      apellido:"",
      domicilio:""
  })

  const getPacientes = async () => {
      const res = await axios.get("http://localhost:3000/pacientes")
      console.log("esto es res", res)
      setPacientes(res.data)
      console.log("esto es pacientes",pacientes)
  }
  useEffect( async () => {
     await getPacientes();
  },[])

  const mostrarModalActualizar = (dato) => {
    setForm(dato)
    setModalActualizar(true)
  };
  const  cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  const mostrarModalInsertar = () => {
    setmodalInsertar(true);
  };
  const cerrarModalInsertar = () => {
    setmodalInsertar(false)
  };
  const handleChange = (e) => {
    e.preventDefault()
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
  };
  return (
    <div>
    <Table>
    <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Domicilio</th>
                <th>Domicilio</th>
              </tr>
            </thead>

            <tbody>
              {pacientes.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.domicilio}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="red" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
    </Table>
    
       
    </div>
  )
}

export default Pacientes