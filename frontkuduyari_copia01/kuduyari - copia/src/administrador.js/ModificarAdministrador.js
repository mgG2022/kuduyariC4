import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/administradores/';

const CompEditarAdministrador = () => {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()
    

    // funcion actualizar
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombres:nombres,
            apellidos:apellidos,
            documento:documento,
            correo:correo,
            telefono:telefono,
            direccion:direccion,
        })
        navigate('/administrador')
    }
    useEffect(() => {
        getAdministradorById()
        // eslint-disable-next-line
    }, [])

    const getAdministradorById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setDocumento(resul.data.documento)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDireccion(resul.data.direccion)
    }

    return (
        <div>
            <h4> Formulario Editar Administrador</h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Nombre </label>
                    <input value={nombres} onChange={(a) => setNombres(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Apellido </label>
                    <input value={apellidos} onChange={(a) => setApellidos(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(a) => setDocumento(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(a) => setCorreo(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(a) => setTelefono(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Direccion </label>
                    <input value={direccion} onChange={(a) => setDireccion(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='subitm' className='btn btn-primary'>Actualizar</button>

            </form>
        </div>
    )

}
export default CompEditarAdministrador;