import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdClose, IoMdMenu } from "react-icons/io";
import { navData } from '../../data/common/navbar-links';
import logo from '../../assets/logo.webp';
import '../../App.css'; // Ensure this file imports your CSS
import { useLocation } from 'react-router-dom';
import {motion , AnimatePresence} from 'framer-motion'

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const dropdownTimeout = useRef(null);
  const subDropdownTimeout = useRef(null);
  const subSubDropdownTimeout = useRef(null);
  const lastScrollY = useRef(0);

  // for closing the dropdown when we going to other page
  useEffect(()=>{
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
    setIsOpen(false);

  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        if (window.scrollY > 40) {
          setIsFixed(true);
          setIsHidden(window.scrollY > lastScrollY.current);
        } else {
          setIsFixed(false);
          setIsHidden(false);
        }
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleMouseEnter = (id, level) => {
    clearTimeout(dropdownTimeout.current);
    clearTimeout(subDropdownTimeout.current);
    clearTimeout(subSubDropdownTimeout.current);

    if (level === 'dropdown') {
      setActiveDropdown(id);
      setActiveSubDropdown(null);
      setActiveSubSubDropdown(null);
    } else if (level === 'subDropdown') {
      setActiveSubDropdown(id);
      setActiveSubSubDropdown(null);
    } else if (level === 'subSubDropdown') {
      setActiveSubSubDropdown(id);
    }
  };

  const handleMouseLeave = (level) => {
    if (level === 'dropdown') {
      dropdownTimeout.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setActiveSubSubDropdown(null);
      }, 200); // delay in ms
    } else if (level === 'subDropdown') {
      subDropdownTimeout.current = setTimeout(() => {
        setActiveSubDropdown(null);
        setActiveSubSubDropdown(null);
      }, 200);
    } else if (level === 'subSubDropdown') {
      subSubDropdownTimeout.current = setTimeout(() => {
        setActiveSubSubDropdown(null);
      }, 200);
    }
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleSubDropdown = (id) => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
  };

  const openDropdown = ( navItem)=>{

    if(navItem.dropdown){
      toggleDropdown(navItem.id)
    
    }
    return;

  }

  useEffect(() => {

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {

        document.body.style.overflow = 'auto';

    }

    return () => {
        document.body.style.overflow = 'auto';
    }

}, [isOpen])

const variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },

};

  

  return (
    <header className={`transition-all duration-500 bg-white  shadow-lg pr-2 ${isFixed && !isOpen ? 'fixed top-0 w-full z-50' : 'relative'} ${isHidden ? '-top-[150px] opacity-0 z-0' : 'top-0'}`}>
      <div className='xxxl:w-10/12 xl:w-[95%] xsm:w-10/12 xs:mx-auto xsm:mr-auto w-full  '>
        <nav className="text-[16px] text-black navbar">
          <div className="flex items-center justify-between px-4 py-4 mx-auto rounded-full">
            {/* Logo Section */}
            <div className='flex items-center'>
              <NavLink to="/">
                <img src={logo} alt="Logo" className="w-[110px]" />
              </NavLink>
            </div>

            {/* Main Navigation for large screens */}
            <div className="hidden space-x-4 xl:flex">
              <ul className="flex space-x-1">
                {navData.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(navItem.id, 'dropdown')}
                    onMouseLeave={() => handleMouseLeave('dropdown')}
                  >
                    {/* Main Navigation Link */}
                    {
                      navItem.dropdown ? (
                        <p
                     
                        className={`flex items-center rounded-full px-4 py-2 transition duration-300 text-black font-semibold bordercursor-pointer
                        ${navItem.dropdown && activeDropdown === navItem.id ? 'bg-[rgb(32,44,69)] text-white' : 'hover:bg-[rgb(32,44,69)] hover:text-white'}`}
                      >
                        {navItem.title}
                        {navItem.dropdown && <span className='mt-2 ml-1'><IoIosArrowDown /></span>}
                      </p>
  

                      ) : (
                        <Link to={navItem.path} className='flex items-center rounded-full px-4 py-2 transition duration-300 text-black font-semibold cursor-pointer hover:bg-dark-blue hover:text-white'> {navItem.title}</Link>
                      )
                    }
                   
                    {/* Dropdown Menu */}
                    {navItem.dropdown && (
                      <ul className={`absolute left-0 mt-6 z-20 w-60 border-[rgb(6,4,4)] border-t-4  border text-black bg-white 
                        ${activeDropdown === navItem.id ? 'block opacity-100' : 'hidden opacity-0'}`}>
                        {navItem.dropdown.map((submenuItem) => (
                          <li
                            key={submenuItem.id}
                            className="relative border-b-0.2 border-[rgb(234,226,226)] group"
                            onMouseEnter={() => handleMouseEnter(submenuItem.id, 'subDropdown')}
                            onMouseLeave={() => handleMouseLeave('subDropdown')}
                          >
                            {/* Submenu Link */}
                            <NavLink
                              to={submenuItem.path}
                              className="flex items-center px-4 text-resp-black-2 transition duration-300 dropdown-item hover:bg-light-grey hover:text-dark-blue"
                            >
                              <p className='hover:translate-x-1 transition-transform duration-200 py-2 flex items-center'>
                                {submenuItem.title}
                                {submenuItem.dropdown && <IoIosArrowForward className="ml-4" />}
                              </p>
                            </NavLink>

                            {/* Sub-dropdown Menu */}
                            {submenuItem.dropdown && (
                              <ul className={`absolute left-full top-0 mt-0 bg-white border border-gray-300 transition-all duration-300
                                ${activeSubDropdown === submenuItem.id ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                {submenuItem.dropdown.map((subSubmenuItem) => (
                                  <li
                                    key={subSubmenuItem.id}
                                    className="relative transition duration-200 ease-in-out transform"
                                    onMouseEnter={() => handleMouseEnter(subSubmenuItem.id, 'subSubDropdown')}
                                    onMouseLeave={() => handleMouseLeave('subSubDropdown')}
                                  >
                                    {/* Sub-submenu Link */}
                                    <NavLink
                                      to={subSubmenuItem.path}
                                      className="border-b-0.2 border-[rgb(143,140,140)] px-4 transition duration-300 w-[150px] text-resp-black-2 flex items-center dropdown-item hover:bg-light-grey hover:text-dark-blue"
                                    >
                                      <p className='hover:translate-x-1 transition-transform duration-200 py-1 flex items-center'>
                                        {subSubmenuItem.title}
                                        {subSubmenuItem.dropdown && <IoIosArrowForward className="ml-4" />}
                                      </p>
                                    </NavLink>

                                    {/* Sub-sub-dropdown Menu */}
                                    {subSubmenuItem.dropdown && (
                                      <ul className={`absolute left-full top-0 mt-0 bg-gray-800 text-white border border-gray-300 transition-all duration-300
                                        ${activeSubSubDropdown === subSubmenuItem.id ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                        {subSubmenuItem.dropdown.map((subSubmenuItem) => (
                                          <li key={subSubmenuItem.id}>
                                            {/* Sub-sub-submenu Link */}
                                            <NavLink
                                              to={subSubmenuItem.path}
                                              className="block px-4 py-2 transition duration-300 hover:bg-[rgb(212,56,12)] text-black"
                                            >
                                              {subSubmenuItem.title}
                                            </NavLink>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-2xl xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}

          <AnimatePresence initial={false}>
          <motion.div
         
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={variants}
         transition={{ duration: 0.3 }}
         
           className={`xl:hidden fixed top-0 right-0 left-0 bg-resp-black text-black text-sm transition-all duration-300  ${isOpen ? 'block z-[80] mt-10 max-h-[600px]  overflow-y-scroll opacity-100' : 'hidden opacity-0'}`}>
            {/* Close Button for Mobile Menu */}

            <div className='flex justify-end bg-white py-6 px-6'>
            {isOpen && (
              
              <button
                onClick={closeAllMenus}
                className=" text-2xl "
              >
                <IoMdClose />
              </button>
            )}
            </div>

            <ul className=" h-full">
              {navData.map((navItem) => (
                <li key={navItem.id} className="relative  text-[17px]  bg-resp-black border-b-0.2 border-b-resp-black-2 hover:border-b-dark-blue transition-all duration-200">
                  <div
                    className="flex justify-between items-center  "
                    onClick={() => toggleDropdown(navItem.id)}
                  >
                    {/* Mobile Navigation Link */}
                    <NavLink
                      to={navItem.path}
                      className="block  w-full px-4 py-3 font-semibold text-left text-white  transition duration-300 "
                      onClick={()=> openDropdown(navItem)}
                    >
                      {navItem.title}
                    </NavLink>

                    {/* Mobile Dropdown Toggle Button */}
                    {navItem.dropdown && (
                      <button
                      
                        
                        className="px-4 py-4 text-left transition duration-300 scroll-auto "
                      >
                        {activeDropdown === navItem.id ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                      </button> 
                    )}
                  </div>

                  {/* Mobile Dropdown Menu */}
                  {navItem.dropdown && activeDropdown === navItem.id && (
                    <ul className={`  text-white transition-all duration-300 overflow-hidden bg-resp-black-2 border-t border-t-black${activeDropdown === navItem.id ? ' opacity-100' : ' opacity-0'}`}>
                      {navItem.dropdown.map((submenuItem) => (
                        <li key={submenuItem.id} className="relative group">
                          <div
                            className="flex items-center justify-between group-hover:border-l-[5px] border-black transition-all duration-200"
                            onClick={() => toggleSubDropdown(submenuItem.id)}
                          >
                            {/* Mobile Submenu Link */}
                            <NavLink
                              to={submenuItem.path}
                              className="block w-full pl-10 pr-4 py-[10px] text-[15px] font-semibold group-hover:translate-x-1 text-left transition duration-300 border-b border-resp-black group-hover:border-dark-blue text-white font-regular whitespace-normal  "
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAllMenus();
                              }}
                            >
                              {submenuItem.title}
                            </NavLink>

                            {/* Mobile Sub-dropdown Toggle Button */}
                            {submenuItem.dropdown && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubDropdown(submenuItem.id);
                                }}
                                className="bg-[rgb(74,72,72)] px-3 py-3 mt-3 hover:bg-[rgb(121,119,119)] text-left transition duration-300"
                              >
                                {activeSubDropdown === submenuItem.id ? <IoIosArrowUp className='bg-[rgb(74,72,72)]' /> : <IoIosArrowDown className='bg-[rgb(74,72,72)]' />}
                              </button>
                            )}
                          </div>

                          {/* Mobile Sub-dropdown Menu */}
                          {submenuItem.dropdown && activeSubDropdown === submenuItem.id && (
                            <ul className={`w-[40%] ml-auto border-2 border-[rgb(141,141,141)] text-white transition-all duration-300 overflow-hidden ${activeSubDropdown === submenuItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                              {submenuItem.dropdown.map((subSubmenuItem) => (
                                <li key={subSubmenuItem.id}>
                                  {/* Mobile Sub-submenu Link */}
                                  <NavLink
                                    to={subSubmenuItem.path}
                                    className="block px-4 py-2 transition duration-300 text-right border-b border-[rgb(118,122,130)] hover:bg-[rgb(118,122,130)] text-black font-regular whitespace-normal dropdown-item"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      closeAllMenus();
                                    }}
                                  >
                                    {subSubmenuItem.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;