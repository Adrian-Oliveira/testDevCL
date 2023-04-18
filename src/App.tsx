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

        <Route element={<PrivateRoutes/>} > 
          <Route path="/home" element={<Home/>} />
        </Route> 

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        
    </HashRouter>
    
  )
}

export default App
