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
    {loadind? <p className='text-center mt-20'>Loading...</p> :<div className=' flex mt-10 flex-row w-full overflow-hidden'>
      <SideNavbar></SideNavbar>
    <div className="flex flex-col w-full md:pl-20 md:w-9/12 overflow-hidden h-[150vh] overflow-y-auto scroll">
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