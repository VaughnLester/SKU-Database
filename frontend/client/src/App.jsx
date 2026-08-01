import { Home } from '../components/home.jsx'
import { useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  

  return (
    <>  
        <BrowserRouter>
            <Routes>
                <Route path="/home/:id" element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
            <Link to="/home?x=Vaughn&y=Will">Click Me!</Link>
        </BrowserRouter>
        
    </>
  )
}

export default App
