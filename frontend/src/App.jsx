import { useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'

const Logout = () =>{
  localStorage.clear()
  return <Navigate to={"/login"}/>
}

const RegisterAndLogout = () =>{
  localStorage.clear()
  return <Register/>
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/register' element={<RegisterAndLogout/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
