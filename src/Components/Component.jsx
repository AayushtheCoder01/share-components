import React, {useState, useEffect} from 'react'
import { databases } from '../appwrite/appwriteConfig'
import Card from './Card'
import { Functions } from 'appwrite'
function Component() {
  // this is shome component.
    const [data, setData] = useState([])

    useEffect(() => {
      const promise = databases.listDocuments("65e8b719ab2350ba6fb4", "65e8b7272cd65c037a79")

      promise.then(
        function(response) {
            setData(response.documents)
        },
        function(error) {
            console.log(error)
        }
      )
    }, [])
    
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data.map(item => (
        <Card key={item.$id} data={item}/>
    ))}
    </div>
    </>
  )
}

export default Component