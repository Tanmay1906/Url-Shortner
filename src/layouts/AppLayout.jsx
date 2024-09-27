import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <div>
            <main className='min-h-screen container'>
                <Header/>
                <Outlet />           
            </main>
            <div className='p-10 text-center bg-gray-800 mt-10'> 
                made with love
            </div>
        </div>
    </div>
  )
}

export default AppLayout