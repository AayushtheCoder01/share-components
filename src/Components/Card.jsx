import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import './components.css'
function Card({data, collectionId}) {
  const {component, code, description, $id} = data
  const htmlString = code;
  const parsedHtml = parse(htmlString);
  return (
<div className="w-12/12 mb-5 h-auto m-2 wiauto max-w-[300px]">
  <div className="w-12/12 h-auto">
    <div className="min-w-[300px] h-auto mx-auto bg-white rounded-md overflow-hidden shadow-md m-0">
      <div className="flex p-2 items-center justify-center bg-gray-200 h-48 overflow-hidden"> 
        {parsedHtml}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{component}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <Link to={`/components/codes/${collectionId}/${$id}`}  className="text-blue-500 hover:underline">
            Get Code
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default React.memo(Card)