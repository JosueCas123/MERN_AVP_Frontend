import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import useAuth from '../hooks/useAuth'

export const RuraProtegida = () => {

    const {auth, cargando} = useAuth()
    //console.log(auth)
    //console.log(cargando)
    if(cargando) return 'Cargando...'
  return (
    <>
        <Header/>
            { auth?._id ?(
                    <main className="container mx-auto mt-10">
                         <Outlet/>
                    </main>
                ) : <Navigate to="/" />}
        <Footer/>
    </>
  )
}
