import React, { useState } from 'react'
import { useEffect } from 'react'
import { usePacientes } from '../hooks/usePacientes'
import { Alerta } from './Alerta'

export const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [id, setId] = useState(null)
    const [alerta, setAlerta] = useState({})
    
    const {guardarPaciente, paciente} =  usePacientes()

    useEffect(() => {
       if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
           
       }
    }, [paciente])
    
  
    const handleSubmit = (e) => {

        e.preventDefault();
        //Validar los formularios
        if ([nombre,propietario,email,fecha,sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return;
        }

        guardarPaciente({nombre,propietario,email,fecha,sintomas, id})
        setAlerta({
            msg:'Guardado correctamente'
        })

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
        
    }

    const {msg} = alerta
  return (
    <>
         <h2 className="font-black text-3xl text-center">Administrador de pacientes</h2>

        <p className="text-xl mt-5 mb-10 text-center">Añade a tus pacientes y {" "} <span className="text-indigo-600 font-bold">Administralos </span></p>

        <form className="bg-white py-10 px-5 mb-5 lg:mb-0 shadow-md rounded-md " onSubmit={handleSubmit}>

            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                <input
                    id="nombre" 
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                     />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="propietario"
                    className="text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                <input
                    id="propietario" 
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                     />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-gray-700 uppercase font-bold">Email del Propietario</label>
                <input
                    id="emial" 
                    type="email"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                     />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className="text-gray-700 uppercase font-bold">Fecha Alta</label>
                <input
                    id="fecha" 
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                     />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="sintomas"
                    className="text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea
                    id="sintomas" 
                    placeholder="Describe los sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                     />
            </div>
            <input 
                type="submit" 
                className="bg-indigo-600  w-full p-3  text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors "
                value={id ? 'Guardar Cambios' : 'Agregar Pacientes'}
                />

        </form>
                {
                    msg && <Alerta alerta={alerta}/>
                }
    </>
  )
}
