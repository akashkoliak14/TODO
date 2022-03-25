import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Schedule from './component/Schedule';

import Appli from './component/Appli';


const App = () => {
  return (
    <div>
      <div><Navbar/>
    <Routes>
    <Route path="/" element={<Schedule/>} />
    <Route path="/Form" element={<Appli/>} />
    
   

  </Routes></div>
    </div>
  )
}

export default App