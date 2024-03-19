import React from 'react'
import { NewHeader } from './Components/component/new-header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <NewHeader/>
        <Outlet/>
    </>
    
  )
}

export default Layout