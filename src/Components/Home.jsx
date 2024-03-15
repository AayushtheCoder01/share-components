import React, {useEffect, useState} from 'react'
import Header from './Header'
import { account } from '../appwrite/appwriteConfig'
import CreateComponent from './AddNew'
import { useNavigate } from 'react-router-dom'
import Component from './Component'
import { Button } from './ui/button'
import { NewHeader } from './component/new-header'
import { data } from 'autoprefixer'


function Home() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(true)

  const getData = async() => {
    const promise = account.get()
    promise.then(
      function(response) {
        setUserData(response)
        setLoading(false)
        console.log(response)
      },
      function (error) {
        console.log(error)
        navigate('/login')
      }
    )
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <NewHeader data={userData}/>

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