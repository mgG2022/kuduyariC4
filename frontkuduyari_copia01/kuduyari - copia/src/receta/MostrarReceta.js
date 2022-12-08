import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/receta/';

const CompMostrarReceta = () => {

    const [recetas, setReceta] = useState([])
    useEffect(() => {
        getRecetas()
    },[] );

    // funcion mostrar recetas
    const getRecetas = async () => {
        const resul = await axios.get(URL)
        setReceta(resul.data);
    }
    // funcion eliminar recetas
    const eliminarReceta = async (id) => {
        await axios.delete(`${URL}${id}`)
        getRecetas()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/receta/agregar' className='btn btn-secondary mt-2 mb-2'>Agregar <i className="fa-solid fa-bowl-food"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Tipo</th>
                                <th>Nombre</th>
                                <th>Ingredientes</th>
                                <th>Preparación</th>
                                <th>Pueblo</th>
                                <th>Comunidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {recetas.map((receta, index) => (
                                <tr key = {index} >
                                    <td > {receta.tipo}</td>
                                    <td > {receta.nombre}</td>
                                    <td > {receta.ingredientes}</td>
                                    <td > {receta.preparacion}</td>
                                    <td > {receta.pueblo}</td>
                                    <td > {receta.comunidad}</td>
                                    <td>
                                        <Link to={`/receta/editar/${receta._id}`} className='btn btn-warning '> <i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=> eliminarReceta(receta._id)} className = 'btn btn-outline-dark'><i className="fa-solid fa-trash"></i></button>
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
export default CompMostrarReceta;

