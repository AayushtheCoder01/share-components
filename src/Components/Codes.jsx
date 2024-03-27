import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { databases } from '../appwrite/appwriteConfig';
import { useLocation } from 'react-router-dom';
import CodeSnippit from './CodeSnippit';
import '../App.css'
import { Button } from './ui/button';
import { IoIosCopy } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Preview from './Preview';
import { useQuery } from '@tanstack/react-query';
 

function Codes() {
  const {id, collection} = useParams()
  const [isCopy, setIsCopy] = useState(false)
  const [isCopyUrl, setIsCopyUrl] = useState(false)
  const location = useLocation();

  
  const {data : code, isLoading} = useQuery({
    queryKey: ['component', id],
    queryFn: getData,
    staleTime: 50000,
    refetchOnWindowFocus: false
  })

  async function getData() {
    const data = await databases.getDocument('65e8b719ab2350ba6fb4', collection, id);

    return data.code
  }

  async function copyCode() {
    setIsCopy(true)
    navigator.clipboard.writeText(code)
    .then(()=> {
      console.log('Code Copied Successfully!')
    })
    .catch((error) => {
      console.log('Error Copying Text!')
    })
    setTimeout(() => {
      setIsCopy(false)
    }, 3000);
  }

  async function copyUrl() {
    setIsCopyUrl(true)
    navigator.clipboard.writeText('https://share-components.vercel.app/'+location.pathname)
    .then(()=> {
      console.log('Code Copied Successfully!')
    })
    .catch((error) => {
      console.log('Error Copying Text!')
    })
    setTimeout(() => {
      setIsCopyUrl(false)
    }, 3000);
  }

  return (
    <>

    <div className='flex items-center h-auto mt-20 mb-10 w-full justify-center p-2'>
      <div className='p-2 bg-gray-100 border border-solid border-gray-200 rounded-lg'>
        <div className='w-full flex justify-center'>
          <h3 className='font-semibold text-lg mb-5 '>Preview</h3>
        </div>

        <div className='mb-10 px-2'>
          <Preview code={code}/>
        </div>
            
          </div>
    </div>
   
    
    <div className='w-full mt-2 flex justify-center mb-5'>
      <div className='w-9/12 bg-gray-900 h-auto p-4 pt-1 rounded-xl'>
        <div className='flex justify-end text-white mb-1 p-1'>
          <div className='snippit-text'>
            <h2 className=' text-xl font-bold'>Code Snippet</h2>
          </div>
        

          {code? <button onClick={copyCode} className={`${isCopy? 'bg-green-500': 'bg-blue-500'} p-1 rounded-sm mx-1 px-2 text-md`}>{isCopy? <IoMdCheckmark /> : <IoIosCopy />}</button> : ''}
          {code? <button title="copy url to share" onClick={copyUrl} className={`urlBtn ${isCopyUrl? 'bg-blue-500' : 'bg-green-500'} p-1 w-[10vw] rounded-sm px-2 mx-1 text-md`}>{isCopyUrl?(<>
            <div className='flex justify-center items-center'>
              <IoMdCheckmark size={'1.5rem'} />
              <p className='text-sm justify-center items-center'>url copied!</p>
            </div>
            
          </>)  : 'share'}</button> : ''}
        </div>
        <CodeSnippit code={code}/>
      </div>
    </div>
    </>
  )
}

export default Codes