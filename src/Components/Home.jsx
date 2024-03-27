import React, {useEffect, useState} from 'react'
import { account } from '../appwrite/appwriteConfig'
import Component from './Component'
import { Button } from './ui/button'
import { NewHeader } from './component/new-header'
import {useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '@/store/createSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch()
  const {isLoggedIn} =useSelector((state) => state)
  const navigate = useNavigate()

  return (
    <>

    <div className='flex h-auto  m-1 mt-10 w-full justify-center'>
    <Button className='mt-10' onClick={() => {
      if(isLoggedIn===true) {
      navigate('/home/add-component')
      }
      if(isLoggedIn===false) {
      navigate('/login')
      }
    } }>Add Component</Button>
    </div>
    
    <div className='p-2 mx-10'>
      <Component/>
    </div>
    </>
  )
}

export default React.memo(Home)