import { useState } from 'react'
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import SignUp from './pages/Signup';
import './App.scss'

function App() {

  return (
    
    <HashRouter>

      <Routes>

        <Route path="/" element={<SignUp/>} />

        <Route element={<PrivateRoutes/>} > 
        </Route> 

        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
        
    </HashRouter>
    
  )
}

export default App
