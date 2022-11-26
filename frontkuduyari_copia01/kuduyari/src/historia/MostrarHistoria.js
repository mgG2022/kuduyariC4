import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/historias/';

const CompMostrarHistoria = () => {

    const [historias, setHistoria] = useState([])
    useEffect(() => {
        getHistorias()
    },[] );

    // funcion mostrar historias
    const getHistorias = async () => {
        const resul = await axios.get(URL)
        setHistoria(resul.data);
    }
    // funcion eliminar historia
    const eliminarHistoria = async (id) => {
        await axios.delete(`${URL}${id}`)
        getHistorias()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/historia/agregar' className='btn btn-secondary mt-2 mb-2'>Agregar <i className="fa-solid fa-book"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Titulo</th>
                                <th>Argumento</th>
                                <th>Personajes</th>
                                <th>Relacion</th>
                                <th>Pueblo | Comunidad</th>
                                <th>Referente</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historias.map((historia, index) => (
                                <tr key = {index} >
                                    <td> {historia.titulo}</td>
                                    <td> {historia.argumento}</td>
                                    <td> {historia.personajes}</td>
                                    <td> {historia.relacionG}</td>
                                    <td> {historia.puebloComunidad}</td>
                                    <td> {historia.referente}</td>
                                    <td>
                                        <Link to={`/historia/editar/${historia._id}`} className='btn btn-warning '> <i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=> eliminarHistoria(historia._id)} className = 'btn btn-outline-dark'> <i className="fa-solid fa-trash"></i></button>
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
export default CompMostrarHistoria;
