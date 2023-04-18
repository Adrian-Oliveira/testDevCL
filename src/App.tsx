import { useState } from 'react'
import { Route, HashRouter, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';

import Home from './pages/Home';
import SignUp from './pages/Signup';

import './App.scss'

function App() {

  return (
    
    <HashRouter>

      <Routes>

        <Route path="/" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />

        <Route element={<PrivateRoutes/>} > 
        </Route> 

        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
        
    </HashRouter>
    
  )
}

export default App
