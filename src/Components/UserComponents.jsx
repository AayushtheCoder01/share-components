import React, { useEffect, useRef, useState } from 'react'
import { account, databases } from '../appwrite/appwriteConfig'
import { data } from 'autoprefixer'
import { NewHeader } from './component/new-header'
import SideNavbar from './SideNavbar'
import { Button } from './ui/button'
import FormCard from './component/form-card'
import {v4 as uuidv4} from 'uuid'
import DataLoader from './DataLoader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

function UserComponents() {
  const [addComponent, setAddComponents] = useState(false)
  const [appwriteId, setAppwriteId] = useState()
  const [userData, setUserData] = useState([])

  const userComponentsCollectionID= null

  const [code, setCode] = useState("")
  const [component, setComponent] = useState("")
  const [description, setDescription] = useState("")

  const [userComponents, setUserComponents] = useState([])
  const isLoggedIn = useSelector((state) => state.isLoggedIn)


  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  async function getData() {
    setLoading(true)
    const user = await account.get()
    const userData = await databases.getDocument("65e8b719ab2350ba6fb4", "65f025095099df66de90", user.$id)
    setLoading(false)
    return setUserData(userData.userComponentsCollectionID)
  }
    
    
    if(isLoggedIn) {
      const { isLoading, data, error } = useQuery({
      queryKey:["userComponents"] , queryFn: getData, staleTime: 10000, refetchOnWindowFocus: false,
    })
    }

        
    const mutation = useMutation({
      mutationFn: ({code, description, component}) => {

      let documentId = uuidv4()
      const promise = databases.createDocument("65e8b719ab2350ba6fb4", "65f305269a55fcffc6eb", documentId, {
      code,
      component,
      description
    }).then(
      function(response) {
        updateDocument(documentId)
      },
      function(error) {
        console.log(error)
      }
    )
  }
})

    const updateDocument = async (id) => {
      const userId = await account.get()
      const newDocumentId = [id, ...userData]
      const promise = databases.updateDocument('65e8b719ab2350ba6fb4','65f025095099df66de90', userId.$id, {
        'userComponentsCollectionID' : newDocumentId
      }).then(
        function(response) {
          console.log('done')
          userData.shift(id)
          setAddComponents(false)

          navigate('/your-components')
          // window.location.reload()
        },
        function(error) {
          console.log('updateDocumentError' ,error)
        }
      )
    }

  return (
    <>
    <div className='flex justify-center mt-20'><Button onClick={() => {
      if(isLoggedIn===true) setAddComponents(!addComponent)
      if(isLoggedIn===false) navigate('/login')
    }}>Add Component</Button></div>
    
    <div className='flex w-screen justify-center h-auto'>
      {addComponent? <FormCard mutation={mutation} setCode={setCode} setDescription={setDescription} setComponent={setComponent} code={code} description={description} component={component} /> : ''}
    </div>

    <div className='flex flex-row w-full mt-10 p-2 px-10'>
      {/* <SideNavbar/> */}

      <div className="flex flex-col flex-wrap w-full md:pl-20 md:w-12/12 overflow-y-auto">
        {loading? <p className='text-center'>Loading...</p>: isLoggedIn? userData.map(id => (
          <DataLoader key={id} userData={id} collectionId={'65f305269a55fcffc6eb'}/> 
        )) : <p className='text-center'>Please Login!</p>}
      </div>
    </div>
    </>
  )
  
}

export default UserComponents

export const loaderFunction = async () => {
  console.log('loader activated!')
  return null
}