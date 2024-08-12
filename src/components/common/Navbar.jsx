import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdClose, IoMdMenu } from "react-icons/io";
import { navData } from '../../data/common/navbar-links';
import logo from '../../assets/logo.webp';
import '../../App.css'; // Ensure this file imports your CSS

const Navbar = () => {
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

  return (
    <header className={`transition-all duration-500 bg-white  shadow-lg ${isFixed && !isOpen ? 'fixed top-0 w-full z-50' : 'relative'} ${isHidden ? '-top-[150px] opacity-0' : 'top-0'}`}>
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
                    <p
                     
                      className={`flex items-center rounded-full px-4 py-2 transition duration-300 text-black font-semibold cursor-pointer
                      ${navItem.dropdown && activeDropdown === navItem.id ? 'bg-[rgb(32,44,69)] text-white' : 'hover:bg-[rgb(32,44,69)] hover:text-white'}`}
                    >
                      {navItem.title}
                      {navItem.dropdown && <span className='mt-2 ml-1'><IoIosArrowDown /></span>}
                    </p>

                    {/* Dropdown Menu */}
                    {navItem.dropdown && (
                      <ul className={`absolute left-0 mt-6 z-10 w-60 border-[rgb(6,4,4)] border-t-4 text-black bg-white 
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
          <div className={`xl:hidden fixed inset-0 bg-white text-black text-sm transition-all duration-300 ${isOpen ? 'block z-[80] mt-10 h-[40%]' : 'hidden'}`}>
            {/* Close Button for Mobile Menu */}
            {isOpen && (
              <button
                onClick={closeAllMenus}
                className="absolute top-4 right-4 text-2xl"
              >
                <IoMdClose />
              </button>
            )}

            <ul className="pt-16">
              {navData.map((navItem) => (
                <li key={navItem.id} className="relative">
                  <div
                    className="flex justify-between items-center bg-resp-black hover:bg-[rgb(132,128,128)] border-b-0.2"
                    onClick={() => toggleDropdown(navItem.id)}
                  >
                    {/* Mobile Navigation Link */}
                    <NavLink
                      to={navItem.path}
                      className="block w-full px-4 py-2 font-bold text-left text-white transition duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeAllMenus();
                      }}
                    >
                      {navItem.title}
                    </NavLink>

                    {/* Mobile Dropdown Toggle Button */}
                    {navItem.dropdown && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(navItem.id);
                        }}
                        className="px-4 py-2 text-left transition duration-300 scroll-auto"
                      >
                        {activeDropdown === navItem.id ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Menu */}
                  {navItem.dropdown && activeDropdown === navItem.id && (
                    <ul className={`bg-gray-800 border-l-0.2 border-r-0.2 border-[rgb(141,141,141)] text-white transition-all duration-300 overflow-hidden ${activeDropdown === navItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      {navItem.dropdown.map((submenuItem) => (
                        <li key={submenuItem.id} className="relative">
                          <div
                            className="flex items-center justify-between border-2 group"
                            onClick={() => toggleSubDropdown(submenuItem.id)}
                          >
                            {/* Mobile Submenu Link */}
                            <NavLink
                              to={submenuItem.path}
                              className="block w-full px-4 py-2 text-left transition duration-300 border-t-0.2 border-[rgb(202,197,197)] text-black font-regular whitespace-normal dropdown-item hover:translate-x-1"
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;