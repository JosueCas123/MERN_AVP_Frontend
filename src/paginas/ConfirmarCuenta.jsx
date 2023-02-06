import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import { Alerta } from '../components/Alerta';
import clienteAxios from '../config/axios';

export const ConfirmarCuenta = () => {
  
  const [cuentaConfimada, setCuentaConfimada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  // nos va sacar lo que viene en la url
  const params = useParams();
  const {id} = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        //variables de entorno 
        const url = `/veterinarios/confirmar/${id}`
        
        const { data } = await clienteAxios(url)
        setCuentaConfimada(true)
        setAlerta({
          msg: data.msg
        })
      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error: true
        })
      }

      setCargando(false)
    }

    confirmarCuenta();
  }, [])
  


  return (
    <>
       <div>
            <h1 className="text-indigo-600 font-black text-6xl">Confirma tu Cuenta Comienza  a Administrar {""} <span className="text-black">tus  Pacientes </span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white" >
          {
            !cargando &&
          <Alerta
              alerta={alerta}
          />
          }
          {
            cuentaConfimada &&
            (<Link className="block text-center mt-5 text-gray-500" 
              to="/">Inicia Sesion</Link>)
          }
      

        </div>
    </>
  )
}
