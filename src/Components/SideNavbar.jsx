import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
function SideNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
    <aside className="rounded-xl hidden md:flex flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-black text-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    <a href="#" className="mx-auto">
        {/* <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
    </a>

    <div className="flex flex-col items-center mt-6 -mx-2">
        {/* <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"> */}
        <h4 className="mx-2 mt-2 font-medium bg-black text-white">Name</h4>
        <p className="mx-2 mt-1 text-sm font-medium bg-black text-white">example.com</p>
    </div>

    <div className="flex flex-col  mt-6 ">

            <NavLink to={'/home'} className="py-2 mb-1 cursor-pointer" href="#">

                <span className="mx-4 font-medium">Home</span>
            </NavLink>

            <NavLink to={'/home/your-components'} className="py-2 mb-1 cursor-pointer mb-[2px]" href="#">

                <span className="mx-4 font-medium">Your Components</span>
            </NavLink>

            <a className="py-2 cursor-pointer mx-4 mb-1" onClick={() => setToggleMenu(!toggleMenu)}>
          <span className='font-medium'>Components</span>
          {toggleMenu && (
            <ul className=" bg-black p-2 text-blue-400 text-white ">
              <li className="py-2">
                <a >Header</a>
              </li>
              <li className="py-2">
                <a >Footer</a>
              </li>
            </ul>
          )}
        </a>

    </div>
</aside>
    </>
  )
}

export default SideNavbar