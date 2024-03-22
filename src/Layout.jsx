import React from 'react'
import { NewHeader } from './Components/component/new-header'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from './store/createSlice'

function Layout() {

  return (
    <>
        <NewHeader/>
        <Outlet/>
    </>
    
  )
}

export default Layout