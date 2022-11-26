import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL = 'http://localhost:5000/api/historias/';

const CompAgregarHistoria = () => {

    const [titulo, setTitulo] = useState('')
    const [argumento, setArgumento] = useState('')
    const [personajes, setPersonajes] = useState('')
    const [relacionG, setRelacionG] = useState('')
    const [puebloComunidad, setPuebloComunidad] = useState('')
    const [referente, setReferente] = useState('')
    const navigate = useNavigate()

    // funcion guardar

    const guardarHistoria = async (g) => {
        g.preventDefault()
        await axios.post(URL, { titulo:titulo, argumento:argumento, personajes:personajes, relacionG:relacionG, puebloComunidad:puebloComunidad, referente:referente })
        navigate('/historia')


    }

    return (
        <div>
            <h4> Formulario Guardar Historia</h4>
            <form onSubmit={guardarHistoria}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input value={titulo} onChange={(g) => setTitulo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Argumento</label>
                    <input value={argumento} onChange={(g) => setArgumento(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Personajes</label>
                    <input value={personajes} onChange={(g) => setPersonajes(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Relacion</label>
                    <input value={relacionG} onChange={(g) => setRelacionG(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Pueblo | Comunidad</label>
                    <input value={puebloComunidad} onChange={(g) => setPuebloComunidad(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Referente</label>
                    <input value={referente} onChange={(g) => setReferente(g.target.value)}
                        type='text' className='form-control' />
                </div>

            <button type='subitm' className='btn btn-primary'>Guardar</button>

            </form>
        </div>
    )



}
export default CompAgregarHistoria;