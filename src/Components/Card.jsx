import React from 'react'
// import { OutlineSparkles } from '@heroicons/react/outline';
import { Link } from 'react-router-dom'
function Card({data}) {
  const {component, code, description, $id} = data
  return (
    <div className="min-w-[300px] max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
  <div className="flex items-center justify-center bg-gray-200 h-48">
    {/* Use the OutlineSparkles component as a Tailwind-styled logo */}
    {/* <OutlineSparkles className="text-indigo-600 w-16 h-16" /> */}
  </div>
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">{component}</h2>
    <p className="text-gray-700">{description}</p>
    <div className="mt-4">
      <Link to={`/components/${$id}`} className="text-blue-500 hover:underline">Get Code</Link>
    </div>
  </div>
</div>
  )
}

export default Card