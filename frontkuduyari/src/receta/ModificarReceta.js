import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/receta/';

const CompEditarReceta = () => {

    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [preparacion, setPreparacion] = useState('')
    const [pueblo, setPueblo] = useState('')
    const [comunidad, setComunidad] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()
    

    // funcion actualizar
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            tipo: tipo,
            nombre: nombre,
            ingredientes: ingredientes,
            preparacion: preparacion,
            pueblo: pueblo,
            comunidad: comunidad,
        })
        navigate('/receta')
    }
    useEffect(() => {
        getRecetaById()
        // eslint-disable-next-line
    }, [])

    const getRecetaById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setTipo(resul.data.tipo)
        setNombre(resul.data.tipo)
        setIngredientes(resul.data.ingredientes)
        setPreparacion(resul.data.preparacion)
        setPueblo(resul.data.pueblo)
        setComunidad(resul.data.comunidad)
    }

    return (
        <div>
            <h4> Formulario Editar Recetas</h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Tipo </label>
                    <input value={tipo} onChange={(a) => setTipo(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Nombre Receta </label>
                    <input value={nombre} onChange={(a) => setNombre(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Ingredientes </label>
                    <input value={ingredientes} onChange={(a) => setIngredientes(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> preparacion </label>
                    <input value={preparacion} onChange={(a) => setPreparacion(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Pueblo </label>
                    <input value={pueblo} onChange={(a) => setPueblo(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Comunidad </label>
                    <input value={comunidad} onChange={(a) => setComunidad(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='subitm' className='btn btn-primary'>Actualizar</button>

            </form>
        </div>
    )

}
export default CompEditarReceta;