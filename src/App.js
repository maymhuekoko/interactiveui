import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <div className=' flex-1 max-w-screen-xl p-2'>
      <Routes>
        <Route path='*'  element={<NotFound/>}/> 
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
