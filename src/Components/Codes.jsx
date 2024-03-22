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
 

function Codes() {
  const {id, collection} = useParams()
  const [code, setCode] = useState()
  const [isCopy, setIsCopy] = useState(false)
  const [isCopyUrl, setIsCopyUrl] = useState(false)
  const location = useLocation();

  const getData = async() => {
    const promise = databases.getDocument('65e8b719ab2350ba6fb4', collection, id);

      promise.then(function (response) {
          console.log(response); // Success
          setCode(response.code)
      }, function (error) {
          console.log(error); // Failure
      });
  }
  useEffect(() => {
    getData()
  }, [])

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
    <div className='flex items-center h-auto mt-10 mb-10 w-full justify-center p-5'>
      <div className='p-5 bg-gray-100 rounded-lg'>
            <Preview code={code}/>
          </div>
    </div>
   

    <div className='flex items-center h-auto w-full p-2 mt-20'>
      <h2 className='snippit-text text-2xl font-bold'>Code Snippet</h2>
    </div>
    
    <div className='w-full mt-2 flex justify-center'>
      <div className='w-9/12 bg-gray-900 h-auto p-4 pt-1 rounded-xl'>
        <div className='flex justify-end text-white mb-1 p-1'>
          {code? <button onClick={copyCode} className={`${isCopy? 'bg-green-500': 'bg-blue-500'} p-1 rounded-sm mx-1 px-2 text-md`}>{isCopy? <IoMdCheckmark /> : <IoIosCopy />}</button> : ''}
          {code? <button title="copy url to share" onClick={copyUrl} className={`urlBtn ${isCopyUrl? 'bg-blue-500' : 'bg-green-500'} p-1 rounded-sm px-2 mx-1 text-md`}>{isCopyUrl? <IoMdCheckmark size={'1.5rem'}/> : 'share'}</button> : ''}
        </div>
        <CodeSnippit code={code}/>
      </div>
    </div>
    </>
  )
}

export default Codes