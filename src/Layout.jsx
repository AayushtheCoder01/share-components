import React, {useEffect} from 'react'
import { NewHeader } from './Components/component/new-header'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from './store/createSlice'
import { useQuery } from '@tanstack/react-query'

function Layout() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchUser())
  }, [])
  return (
    <>
    <div className='fixed  w-full top-0 left-0 '>
      <NewHeader/>
    </div>
        
        <Outlet/>
    </>
    
  )
}

export default Layout