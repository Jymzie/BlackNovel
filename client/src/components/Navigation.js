
import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import { FaChevronDown,FaChevronUp } from 'react-icons/fa';


function Navigation() {
    const [nav, setNav] = useState(false)
    const [submenu, setSubMenu] = useState(false)

    const NavTrigger = () => setNav(!nav)
    const SubTrigger = () => setSubMenu(!submenu)
    const global = useContext(GlobalContext)
    const NavClose = () => {
      setNav(false);
    };
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
      setOpen((prev) => !prev);
    };
      
    const NavText = [{Name: 'Home', to: '/'},{Name: 'Wiki', to: '/list'}]
    const page = window.location.pathname
  return (
    
    // Navigation bar on large screen
    <div className={`bg-[#020617] w-screen  h-[70px] z-10 drop-shadow-lg ${page != "/read" ? 'fixed':''}` }>

    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <img className='h-28 mt-5 w-28 z-20' src='favicon.webp'/>
      {/* <h1 className='text-3xl font-bold text-black mr-4 sm:text-4xl'>Websites.</h1> */}
      <ul className='hidden text-black md:flex'>
        {NavText.map((item,i)=>(
          <Link to={item.to} key={i}>
            <li className='rounded-lg cursor-pointer text-white font-bold px-9 mx-1 [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]
            transition ease-in-out delay-150
            hover:bg-white hover:text-black'>
              {item.Name}
              
            </li>
          </Link>
        ))}
        <Link to={"/novels"}>
          <li className='rounded-lg cursor-pointer text-white font-bold px-9 mx-1 [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]
              transition ease-in-out delay-150
              hover:bg-white hover:text-black' onMouseEnter={open ? null:handleToggle} onMouseLeave={open ? handleToggle:null}>
                Novels
            {open && (
              <div className="absolute top-16" >
                <ul className="w-40 h-auto shadow-md rounded-md p-1 border bg-white">
                  {global.map((item, index) => (
                    <Link to={"/novel?title="+item.title}  key={index}>
                      <li
                        className={`relative flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 rounded-md`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </Link>
      
      
       
      </ul>
    </div>
        {/* <div className='hidden md:flex pr-4'>

            <a
            className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
            type="submit"
            >
            <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />
            <span className="text-sm font-medium">
            Login
            </span>
            </a>

            <a
            className="block cursor-pointer shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
          >
            <span className="sr-only">Account</span>
            <FaUserAlt className='lg:w-5 lg:h-5' />
          </a>

        </div> */}

        <div className='md:hidden mr-4' onClick={NavTrigger}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <div className='flex'>

            {/* <a
            className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
            type="submit"
            >
            <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />
            <span className="text-sm font-medium">
            Login
            </span>
            </a> */}

            {/* <a
            className="block cursor-pointer shrink-0 rounded-lg bg-white mr-4 p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
          >
            <span className="sr-only">Account</span>
            <FaUserAlt className='lg:w-5 lg:h-5' />
          </a> */}
                <XIcon className='w-5 text-white' /> 
            </div>}

        </div>

        </div>


        {/* Navigation on small screens */}
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        {NavText.map((item,i)=>(
          <Link to={item.to} key={i}>
            <li onClick={NavClose} className='border-b-2 border-zinc-300 w-full'>
              {item.Name}
            </li>
          </Link>
          ))}

            <li  className='border-b-2 border-zinc-300 w-full'>
              <div className='grid grid-cols-2'>
              <Link to={"/novels"}>
              <span>Novels </span>
              </Link>
              <span className='items-center justify-end flex' onClick={SubTrigger}>{!submenu ? <FaChevronDown/>: <FaChevronUp/>}</span>
              
              </div>
              
              
             
            </li>
            
                {global.map((item, index) => (
                  <Link to={"/novel?title="+item.title} key={index}>
                    <li onClick={NavClose} className={!submenu ? 'hidden' : 'border-b-2 border-zinc-300 w-full text-center'}>{item.title}</li>
                  </Link>))}
         
          </ul>

    </div>
    
  )
}

export default Navigation
