import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/administradores/';

const CompMostrarAdministrador = () => {

    const [administradores, setAdministrador] = useState([])
    useEffect(() => {
        getAdministradores()
    },[] );

    // funcion mostrar administrador
    const getAdministradores = async () => {
        const resul = await axios.get(URL)
        setAdministrador(resul.data);
    }
    // funcion eliminar administrador
    const eliminarAdministrador = async (id) => {
        await axios.delete(`${URL}${id}`)
        getAdministradores()
        // eslint-disable-next-line
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/administrador/agregar' className='btn btn-secondary mt-2 mb-2'>Agregar <i className="fa-solid fa-person-circle-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Documento</th>
                                <th>Correo Electronico</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {administradores.map((administrador, index) => (
                                <tr key = {index} >
                                    <td> {administrador.nombres}</td>
                                    <td> {administrador.apellidos}</td>
                                    <td> {administrador.documento}</td>
                                    <td> {administrador.correo}</td>
                                    <td> {administrador.telefono}</td>
                                    <td> {administrador.direccion}</td>
                                    <td>
                                        <Link to={`/administrador/editar/${administrador._id}`} className='btn btn-warning '><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=> eliminarAdministrador(administrador._id)} className = 'btn btn-outline-dark'><i className="fa-solid fa-person-circle-minus"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CompMostrarAdministrador;