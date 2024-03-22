import React, { useState } from 'react'
import parse from 'html-react-parser';

function Preview({code}) {
    const codeSnippet = code || ''

    const parsedHtml = parse(codeSnippet)

  return (
    <div className='w-[70vw] flex justify-center h-auto w-auto'>{parsedHtml}</div>
  )
}

export default Preview