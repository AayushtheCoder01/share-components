import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { databases } from '../appwrite/appwriteConfig';
import CodeSnippit from './CodeSnippit';
import '../App.css'
import { Button } from './ui/button';
 

function Codes() {
  const {id} = useParams()
  const [code, setCode] = useState()
  const getData = async() => {
    const promise = databases.getDocument('65e8b719ab2350ba6fb4', '65e8b7272cd65c037a79', id);

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
  return (
    <>
    <div className='flex items-center h-20 w-full p-2'>
      <h2 className='snippit-text mt-20 text-2xl font-bold'>Code Snippit</h2>
    </div>
    
    <div className='w-full mt-10 flex justify-center'>
      <div className='w-9/12 bg-gray-900 h-auto p-5 rounded-xl'>
        <CodeSnippit code={code}/>
      </div>
    </div>
    </>
  )
}

export default Codes