import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/dashboard'
import RedirectLink from './pages/redirect-link'
import Link from './pages/link'
import Auth from './pages/auth'
import UrlProvider from './context'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<RedirectLink/>
      }
    ]
  }
])
const App = () => {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  )
}

export default App