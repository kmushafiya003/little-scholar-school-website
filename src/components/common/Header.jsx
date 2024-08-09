import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";


const Header = ({ page }) => {

  //get the current location 
  const location = useLocation();
  const pathName = location.pathname;

  //Process to make path name formatted

  const formattedPath = pathName
    .substring(1)   //remove leading slash
    .split('-')   //splt by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
    .join(' ')  //join words with spaces



  return (
    <section className="w-full xs:h-[200px] h-[190px] header-bg grid place-items-center relative text-white">

       {/* ---------------- black overlay screen ----------------- */}
       <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-85 z-1'></div>

      {/* ------------ container -------------- */}

      <div className=' sm:w-[80%] w-[95%]  flex flex-col items-center xs:gap-y-6 gap-y-2 relative z-2'>

        {/* ------------  heading ----------- */}

        <h1 className='xs:text-4xl text-[28px] font-semibold tracking-wider '>{formattedPath}</h1>

        {/* ------------ link -------- */}
        <p className='flex gap-x-1 xs:text-lg'>
          <Link to="/" className='font-semibold flex items-center gap-x-1 '>Home <span><FaAngleRight/></span></Link>
          <p className='font-semibold flex items-center gap-x-1'>{page} <span><FaAngleRight/></span></p>
          <span className='font-light'>{formattedPath}</span>
        </p>

      </div>

    </section>
  )
}

export default Header