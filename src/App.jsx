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
import UserComponents from './Components/UserComponents';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/components/codes/:collection/:id' element={<Codes/>}/>
        <Route path='/home/add-component' element={<CreateComponent/>}/>
        <Route path='/home/your-components' element={<UserComponents/>}/>
      </Routes>
    </BrowserRouter>

     </>
  )
}

export default App
