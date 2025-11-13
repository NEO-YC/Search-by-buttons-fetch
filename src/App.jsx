import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import ButtonList from './Compomemts/ButtonList'
import Gallery from './Compomemts/Gallery'
import Carusel from './Compomemts/Carusel'
import Calc from './Compomemts/Calc'
import Touporlower from './Compomemts/Touporlower'


function App() {

  return (
    <>
     <BrowserRouter>
     <Header />

     <Routes>

       <Route path="/" element={<Gallery />} />
       <Route path="/page2" element={<Carusel />} />
       <Route path="/Q1" element={<Touporlower />} />
       <Route path="/Q4" element={<Calc />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
