import React from 'react';
import {Outlet} from 'react-router-dom';

export const AurhLayout = () => {
  return (
    <>
    
        <main className="container mx-auto md:grid md:grid-cols-2 mt-20 gap-10 p-5 items-center">
            <Outlet/>
        </main>
    </>
  )
}
