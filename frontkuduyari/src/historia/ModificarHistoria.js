import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/historias/';

const CompEditarHistoria = () => {

    const [titulo, setTitulo] = useState('')
    const [argumento, setArgumento] = useState('')
    const [personajes, setPersonajes] = useState('')
    const [relacionG, setRelacionG] = useState('')
    const [puebloComunidad, setPuebloComunidad] = useState('')
    const [referente, setReferente] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()
    

    // funcion actualizar
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
           titulo:titulo,
           argumento:argumento,
           personajes:personajes,
           relacionG:relacionG,
           puebloComunidad:puebloComunidad,
           referente:referente,
        })
        navigate('/historia')
    }
    useEffect(() => {
        getHistoriaById()
        // eslint-disable-next-line
    }, [])

    const getHistoriaById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setTitulo(resul.data.titulo)
        setArgumento(resul.data.argumento)
        setPersonajes(resul.data.personajes)
        setRelacionG(resul.data.relacionG)
        setPuebloComunidad(resul.data.puebloComunidad)
        setReferente(resul.data.referente)
    }

    return (
        <div>
            <h4> Formulario Editar Historias</h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Titulo </label>
                    <input value={titulo} onChange={(a) => setTitulo(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Argumento </label>
                    <input value={argumento} onChange={(a) => setArgumento(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Personajes </label>
                    <input value={personajes} onChange={(a) => setPersonajes(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Relacion </label>
                    <input value={relacionG} onChange={(a) => setRelacionG(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Pueblo | Comunidad </label>
                    <input value={puebloComunidad} onChange={(a) => setPuebloComunidad(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Referente </label>
                    <input value={referente} onChange={(a) => setReferente(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='subitm' className='btn btn-primary'>Actualizar</button>

            </form>
        </div>
    )

}
export default CompEditarHistoria;