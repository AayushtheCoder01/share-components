import React, {useState, useEffect} from 'react'
import { databases } from '../appwrite/appwriteConfig'
import Card from './Card'
import { Functions } from 'appwrite'
import SideNavbar from './SideNavbar'
import './components.css'
function Component() {
  // this is shome component.
    const [data, setData] = useState([])
    const [loadind, setLoading] = useState(true)
    useEffect(() => {
      const promise = databases.listDocuments("65e8b719ab2350ba6fb4", "65e8b7272cd65c037a79")

      promise.then(
        function(response) {
            setData(response.documents)
            setLoading(false)
        },
        function(error) {
            console.log(error)
        }
      )
    }, [])
    
  return (
    <>
    {loadind? <p className='text-center mt-20'>Loading...</p> :<div className='flex mt-10 w-full overflow-hidden'>
      <div className=''>
        <SideNavbar></SideNavbar>
      </div>
      
      <div className="flex flex-col w-full md:pl-20 md:w-10/12 h-auto overflow-y-auto scroll">
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