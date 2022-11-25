import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL = 'http://localhost:5000/api/receta/';

const CompAgregarReceta = () => {

    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [preparacion, setPreparacion] = useState('')
    const [pueblo, setPueblo] = useState('')
    const [comunidad, setComunidad] = useState('')
    const navigate = useNavigate()

    // funcion guardar

    const guardarReceta = async (g) => {
        g.preventDefault()
        await axios.post(URL, { tipo: tipo, nombre: nombre, ingredientes: ingredientes, preparacion: preparacion, pueblo: pueblo, comunidad: comunidad })
        navigate('/receta')


    }

    return (
        <div>
            <h4> Formulario Guardar Receta</h4>
            <form onSubmit={guardarReceta}>
                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input value={tipo} onChange={(g) => setTipo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nombre Receta</label>
                    <input value={nombre} onChange={(g) => setNombre(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Ingredientes</label>
                    <input value={ingredientes} onChange={(g) => setIngredientes(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Preparacion</label>
                    <input value={preparacion} onChange={(g) => setPreparacion(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Pueblo</label>
                    <input value={pueblo} onChange={(g) => setPueblo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Comunidad</label>
                    <input value={comunidad} onChange={(g) => setComunidad(g.target.value)}
                        type='text' className='form-control' />
                </div>

            <button type='subitm' className='btn btn-primary'>Guardar</button>

            </form>
        </div>
    )



}
export default CompAgregarReceta;