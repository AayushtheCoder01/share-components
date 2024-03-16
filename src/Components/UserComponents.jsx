import React, { useEffect, useRef, useState } from 'react'
import { account, databases } from '../appwrite/appwriteConfig'
import { data } from 'autoprefixer'
import { NewHeader } from './component/new-header'
import SideNavbar from './SideNavbar'
import { Button } from './ui/button'
import FormCard from './component/form-card'
import {v4 as uuidv4} from 'uuid'
import DataLoader from './DataLoader'

function UserComponents() {
  const [loading, setLoading] = useState(true)
  const [addComponent, setAddComponents] = useState(false)
  const [appwriteId, setAppwriteId] = useState()
  const [userData, setUserData] = useState([])

  const userComponentsCollectionID= ['new']

  const [code, setCode] = useState("")
  const [component, setComponent] = useState("")
  const [description, setDescription] = useState("")

  const [userComponents, setUserComponents] = useState([])
    useEffect(()=> {
        async function createUserComponentsArr() {
          const userId = await account.get()
          const createDocument = await databases.createDocument(
            '65e8b719ab2350ba6fb4',
            '65f025095099df66de90',
            userId.$id,
            {userComponentsCollectionID}
          )
        }
          createUserComponentsArr()
    }, [])

    useEffect(()=> {
      async function getDocument() {
        const userId = await account.get()
        const promise = await databases.getDocument(
          '65e8b719ab2350ba6fb4',
          '65f025095099df66de90',
          userId.$id,
        ).then(
          function(response) {
            setUserData(response.userComponentsCollectionID)
            setLoading(false)
          },
          function(error) {
            console.log(error)
          }
        )
      }
      getDocument()
    },[])



    const handleSubmit = async (e) => {
      e.preventDefault()
      let documentId = uuidv4()
      const promise = await databases.createDocument("65e8b719ab2350ba6fb4", "65f305269a55fcffc6eb", documentId, {
      code,
      component,
      description
    }).then(
      function(response) {
        updateDocument(documentId)
        setAddComponents(false)
      },
      function(error) {
        console.log(error)
      }
    )
    }

    const updateDocument = async (id) => {
      const userId = await account.get()
      const newDocumentId = [id, ...userData]
      const promise = databases.updateDocument('65e8b719ab2350ba6fb4','65f025095099df66de90', userId.$id, {
        'userComponentsCollectionID' : newDocumentId
      }).then(
        function(response) {
          console.log('done')
          userData.shift(id)
        },
        function(error) {
          console.log('updateDocumentError' ,error)
        }
      )
    }
  return (
    <>
    <div className=''>
      <NewHeader/>
    </div>

    <div className='flex justify-center m-1 mt-5'><Button onClick={() => setAddComponents(!addComponent)}>Add component</Button></div>
    
    <div className='flex w-screen justify-center h-auto'>
      {addComponent? <FormCard handleSubmit={handleSubmit} setCode={setCode} setDescription={setDescription} setComponent={setComponent}/> : ''}
    </div>

    <div className='flex flex-row w-full mt-10 p-2 px-10'>
      <SideNavbar/>

      <div className="flex flex-col flex-wrap w-full md:pl-20 md:w-9/12 overflow-y-auto">
        {loading? <p className='text-center'>Loading</p>: userData.map(id => (
          <DataLoader key={id} userData={id} collectionId={'65f305269a55fcffc6eb'}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default UserComponents