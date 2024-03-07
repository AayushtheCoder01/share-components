import React, {useState, useEffect} from 'react'
import { account } from '../appwrite/appwriteConfig';
import { Navigate, useNavigate } from 'react-router-dom';

function Header({data = {name: ''}}) {
    const {name} = data;
    const navigate = useNavigate()
   return (
    <>
  <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white rounded-lg p-2 mr-4">
            {/* First name and last name initials or icons can go here */}
            <span className="text-blue-500 font-semibold">Share</span>
            <span className="text-blue-500 font-semibold"> Components^</span>
          </div>
          <div className="text-white">
            {/* Replace {name} with actual user's first and last name */}
            <span className="block font-semibold text-md"> {name}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <button
      className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //   onClick={handleLogout}
    onClick={() => {
        account.deleteSessions()
        navigate('/login')
    }}
    >
      Logout
    </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header