import React, { useState } from 'react'
import { account, databases } from '../appwrite/appwriteConfig'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'


function CreateComponent() {
  const navigate = useNavigate()
  const [code, setCode] = useState("")
  const [component, setComponent] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit= async(e) => {
    e.preventDefault()

    const promise = databases.createDocument("65e8b719ab2350ba6fb4", "65e8b7272cd65c037a79", uuidv4(), {
      code,
      component,
      description
    }).then(
      function(response) {
        console.log(response)
        alert('done')
      },
      function(error) {
        console.log(error)
      }
    )
    navigate('/home')
  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center text-2xl font-bold">Sign up</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Component
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e) => {
                    setComponent(e.target.value)
                  }}
                    placeholder='Header, Footer, NavBar'
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code Snippits
                </label>
                <div className="mt-1">
                  <textarea
                  onChange={(e) => {
                    setCode(e.target.value)
                  }}
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Explain about component.
                </label>

                <div className="mt-1">
                  <input
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  
                >
                  Add
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
</>
  )
}

export default CreateComponent