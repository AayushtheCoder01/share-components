/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Qf4uPqORARc
 */
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button"
import { account } from "../../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/createSlice'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export function NewHeader() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const [navBtn, setNavBtn] = useState(false)


  return (
    <>
    <header className="flex px-5  items-center h-16 bg-gray-100 px-4 w-full shrink-0 top-0">
      <div onClick={() => {
        setNavBtn(!navBtn)
      }} className="m-2 mr-4 md:hidden cursor-pointer">{navBtn? <MdOutlineKeyboardArrowUp size={'25'}/> : <IoIosArrowDown size={'25'}/>}</div>
      
      <NavLink className="mr-4 md:ml-2" to={'/home'}>
        <span className="hidden text-xl font-semibold md:inline ">Share Components</span>
        <img className="h-[35px] w-[35px] mx-2 rounded-3xl inline" alt="site logo" src="../../src/assets/Logo png.png"/>
      </NavLink>

      <div className="hidden md:flex">
            {/* <NavLink to={'/home'} className={({isActive})=> `py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} cursor-pointer rounded-md`} href="#">

      <span className="mx-2 font-medium">Home</span>
      </NavLink>

      <NavLink to={'/your-components'} className={({isActive})=> `py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} py-2 mb-1 cursor-pointer mb-[2px] rounded-md`} href="#">

      <span className="mx-2 font-medium">Your Components</span>
      </NavLink> */}
      </div>
      
      <div className="flex items-center space-x-4 ml-auto px-4">
      <NavLink to={'/home'} className={({isActive})=> `hidden md:flex py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} cursor-pointer rounded-md`} href="#">

      <span className="mx-2 font-medium">Home</span>
      </NavLink>

      <NavLink to={'/your-components'} className={({isActive})=> `hidden md:flex py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} py-2 mb-1 cursor-pointer mb-[2px] rounded-md`} href="#">

      <span className="mx-2 font-medium">Your Components</span>
      </NavLink>

        {user.name? <div className="text-lg hidden md:block font-semibold text-gray-500 border border-green-300 bg-green-100 p-1 px-3 rounded-3xl">{user.name}</div> : ""}

        {isLoggedIn? 
        <Button onClick={() => {
        account.deleteSessions()
        dispatch(logout())
        navigate('/login')
    }}>Logout</Button> : 
    
    <Button onClick={() => {
      navigate('/login')
  }}>Login</Button>}
        
      </div>
    </header>
    {navBtn? <div className="h-auto w-full p-2 pl-10 bg-gray-100">
      <ul>
      <NavLink to={'/home'} className={({isActive})=> `block py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} cursor-pointer rounded-md`} href="#">

        <span className="mx-4 font-medium">Home</span>
      </NavLink>

      <NavLink to={'/your-components'} className={({isActive})=> `block py-2 mb-1 ${isActive? 'text-blue-600' : ' text-black'} py-2 mb-1 cursor-pointer mb-[2px] rounded-md`} href="#">

        <span className="mx-4 font-medium">Your Components</span>
      </NavLink>
        
      </ul>
      
    </div> : ""}
    
    </>
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
