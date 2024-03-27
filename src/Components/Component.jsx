import React, {useState, useEffect} from 'react'
import { databases } from '../appwrite/appwriteConfig'
import Card from './Card'
import { Functions } from 'appwrite'
import SideNavbar from './SideNavbar'
import './components.css'
import { useQuery } from '@tanstack/react-query';

function Component() {
    const {isLoading, data} = useQuery({
      queryKey:["components"] , queryFn: getData, staleTime: 10000, refetchOnWindowFocus: false,
    })

    async function getData() {
      const userdata = await databases.listDocuments("65e8b719ab2350ba6fb4", "65e8b7272cd65c037a79")
      return [...userdata.documents.reverse()]
    }
    
  return (
    <>
    {isLoading? <p className='text-center mt-20'>Loading...</p> :<div className='flex mt-20 w-full'>
      <div className=''>
        {/* <SideNavbar></SideNavbar> */}
      </div>
      
      <div className="flex flex-wrap w-full justify-center h-auto scroll">
        {data.map(item => (
          <Card key={item.$id} data={item} collectionId={'65e8b7272cd65c037a79'}/> 
        ))}
      </div>
      </div>
}
    </>
  )
}

export default React.memo(Component)