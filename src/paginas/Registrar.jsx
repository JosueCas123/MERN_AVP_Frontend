import { useState } from 'react'
import {Link} from 'react-router-dom';
import { Alerta } from '../components/Alerta';
import clienteAxios from '../config/axios';

export const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})


  const handleSubmit = async e => {
    e.preventDefault();
      
      //console.log('enviando informacion')
      if ([nombre, email, password, repetirPassword].includes('')) {
          setAlerta({msg: 'Hay campos vasios', error: true})
          return;
      }
      
      if(password !== repetirPassword){
        setAlerta({msg: 'Los password no son iguales', error: true})
        return
      }

      if (password.length < 6) {
        setAlerta({msg: 'El password es muy corto, minimo 6 caracteres', error: true})
        return;
      }

      setAlerta({})

      //Crear el usuario en la api

      try {
      
        await clienteAxios.post('/veterinarios', {nombre, email, password})
        setAlerta({
          msg: 'Cuenta creada correctamente, verifique su email',
          error:false
        })
       
      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error: true
        })

      }

    

  }

  const {msg} = alerta;

  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra tus {""} <span className="text-black">Pacientes </span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white" >
            <form onSubmit={handleSubmit}>
            {
              msg &&  <Alerta alerta={alerta}/>
            }
              <div>
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Tu Nombre
                </label>
                <input 
                  type="type" 
                  placeholder="Email de Registro"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
             
              <div>
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Email de Registro"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="Tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Repite tu password
                </label>
                <input 
                  type="password" 
                  placeholder="Repite tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={repetirPassword}
                  onChange={e => setRepetirPassword(e.target.value)}
                />
              </div>
              <input 
                type="submit"
                value="Crear cuenta"
                className="bg-indigo-600 w-full py-3  px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" 
              />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link 
                className="block text-center mt-5 text-gray-500"
                to="/"
              >
                 ¿No tienes una cuenta? Inicia Sesion </Link>
              <Link
                className="block text-center mt-5 text-gray-500" 
                to="/olvidePassword"> 
                Olvide mi Password
               </Link>
            </nav>
        </div>
    </>
  )
}
