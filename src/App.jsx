import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './paginas/Login';
import { Registrar } from './paginas/Registrar';
import { ConfirmarCuenta } from './paginas/ConfirmarCuenta';
import { OlvidePassword } from './paginas/OlvidePassword';
import { AurhLayout } from './layouts/AurhLayout';
import { NuevoPassword } from './paginas/NuevoPassword';
import { RuraProtegida } from './layouts/RuraProtegida';
import { AdministrarPacientes } from './paginas/AdministrarPacientes';
import { AuthProvider } from './context/AuthContext';
import { PacientesProvider } from './context/PacientesProvider';
import { Perfil } from './paginas/Perfil';
import { CambiarPassword } from './paginas/CambiarPassword';



const App = () =>  {
  

  return (
    <BrowserRouter>
    <AuthProvider>
      <PacientesProvider>
        <Routes>
          <Route path='/' element={<AurhLayout/>}>
            <Route index element={<Login/>}/>
            <Route path="registrar" element={<Registrar/>}/>
            <Route path="olvide-password" element={<OlvidePassword/>}/>
            <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
            <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>

          <Route path='/admin' element={<RuraProtegida/>}>
              <Route index element={<AdministrarPacientes/>}/>
              <Route path="perfil" element={<Perfil/>}/>
              <Route path="cambiar-password" element={<CambiarPassword/>}/>
          </Route>
        </Routes>
      </PacientesProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
