import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function CodeSnippit({code}) {

  return (
    <>
    <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
      padding: "25px"
    }} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>

     </>
  )
}

export default CodeSnippit