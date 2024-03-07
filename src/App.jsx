import { useState } from 'react'
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import CreateComponent from './Components/AddNew';
import Codes from './Components/Codes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/components/:id' element={<Codes/>}/>
        <Route path='/home/add-component' element={<CreateComponent/>}/>
      </Routes>
    </BrowserRouter>

     </>
  )
}

export default App
