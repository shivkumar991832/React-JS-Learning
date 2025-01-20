import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import User from './component/User'

function App() {
   const router = createBrowserRouter([
      {
        path: "/home",
        element: <> <Navbar/><Home/> </>
      },
      {
        path: "/login",
        element: <> <Navbar/><Login/> </>
      },
      {
        path: "/about",
        element: <> <Navbar/><About/> </>
      },
      {
        // username is a parameter(variable)
        path: "/user/:username",
        element: <> <Navbar/><User/> </>
      },
    ])

  return (
    <>
    
   
    <RouterProvider router={router}/>

     
    </>
  )
}

export default App
