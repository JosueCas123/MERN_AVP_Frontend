import React from 'react'
import { usePacientes } from '../hooks/usePacientes'
import { Pacientes } from './Pacientes'

export const ListadoPacientes = () => {

    const {pacientes} = usePacientes()
  
  return (    
    <>
        {
          pacientes.length ? 
          <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">Administra tus {" "} <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>
        </>
              :
              (
                <>
                  <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                  <p className="text-xl mt-5 mb-10 text-center">Comienza agragando pacientes {" "} <span className="text-indigo-600 font-bold">apareceran en este lugar</span></p>
                </>
              )
        }

        {
          pacientes.map(paciente => (
            <Pacientes 
              key={paciente._id}
              pacientes={paciente}
            />
          ))
        }
    </>
  )
}
