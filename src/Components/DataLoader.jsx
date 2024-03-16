import { databases } from '@/appwrite/appwriteConfig'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import Card from './Card'
function DataLoader({userData, collectionId}) {
    const [data, setData] = useState('')
    // const [show, setShow] = useState(false)

  const htmlString = data && data.code ? data.code : 'Loading...';
  const parsedHtml = parse(htmlString);
     useEffect(()=>{
        const getData = async () => {
            const promise = await databases.getDocument('65e8b719ab2350ba6fb4', '65f305269a55fcffc6eb', userData).then(
                function(response) {
                    setData(response)
                    console.log(response)
                },
                function(error) {
                    console.log(error)
                }
            )
        }
        getData()
    },[])
  return (
    <>
   <div className="w-12/12 mb-5 h-auto">
  <div className="w-12/12 h-auto">
    <div className="min-w-[350px] h-auto mx-auto bg-white rounded-md overflow-hidden shadow-md m-0">
      <div className="flex p-2 items-center justify-center bg-gray-200 h-48">
        {parsedHtml}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{data.component}</h2>
        <p className="text-gray-700">{data.description}</p>
        <div className="mt-4">
          <Link to={`/components/codes/${collectionId}/${data.$id}`} target='_blank' className="text-blue-500 hover:underline">
            Get Code
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default DataLoader