import React, {useEffect, useState} from 'react'
import Header from './Header'
import { account } from '../appwrite/appwriteConfig'
import CreateComponent from './AddNew'
import Component from './Component'
import { Button } from './ui/button'
import { NewHeader } from './component/new-header'
import { data } from 'autoprefixer'
import {useDispatch, useSelector } from 'react-redux'
import { login } from '@/store/createSlice'

function Home() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const getData = async (dispatch, setLoading) => {
  try {
    const response = await account.get();
    // Check if the user is already a guest
    if (response.prefs === 'guest') {
      // If the user is already a guest, update the loading state and return
      setLoading(false);
      return;
    }
    // Update user's role to guest
    await account.updatePrefs('guest');
    // Dispatch the login action with the updated user data
    dispatch(login(response));
    // Update the loading state
    setLoading(false);
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error
  }
};
  getData()
  return (
    <>
    <NewHeader/>

    <div className='flex h-auto  m-1 mt-5 w-full justify-center'>
    <Button onClick={() => (navigate('/home/add-component')) }>Add Components</Button>
    </div>
    
    <div className='p-2 mx-10'>
      <Component/>
    </div>
    </>
  )
}

export default React.memo(Home)