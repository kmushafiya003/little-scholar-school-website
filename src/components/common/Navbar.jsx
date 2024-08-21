import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoMdClose,
  IoMdMenu
} from 'react-icons/io'
import { navData } from '../../data/common/navbar-links'
import logo from '../../assets/logo.webp'
import '../../App.css'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { debounce } from 'lodash'

const Navbar = () => {
  const location = useLocation()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState(null)
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const dropdownTimeout = useRef(null)
  const subDropdownTimeout = useRef(null)
  const subSubDropdownTimeout = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setActiveDropdown(null)
    setActiveSubDropdown(null)
    setActiveSubSubDropdown(null)
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        if (window.scrollY > 40) {
          setIsFixed(true)
          setIsHidden(window.scrollY > lastScrollY.current)
        } else {
          setIsFixed(false)
          setIsHidden(false)
        }
      }
      lastScrollY.current = window.scrollY
    }

    const handleResize = debounce(() => {
      const width = window.innerWidth
      setWindowWidth(width)
      if (width > 1024 && isOpen) {
        setIsOpen(false)
      }
    }, 200)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  const handleMouseEnter = (id, level) => {
    clearTimeout(dropdownTimeout.current)
    clearTimeout(subDropdownTimeout.current)
    clearTimeout(subSubDropdownTimeout.current)

    if (level === 'dropdown') {
      setActiveDropdown(id)
      setActiveSubDropdown(null)
      setActiveSubSubDropdown(null)
    } else if (level === 'subDropdown') {
      setActiveSubDropdown(id)
      setActiveSubSubDropdown(null)
    } else if (level === 'subSubDropdown') {
      setActiveSubSubDropdown(id)
    }
  }

  const handleMouseLeave = level => {
    if (level === 'dropdown') {
      dropdownTimeout.current = setTimeout(() => {
        setActiveDropdown(null)
        setActiveSubDropdown(null)
        setActiveSubSubDropdown(null)
      }, 200)
    } else if (level === 'subDropdown') {
      subDropdownTimeout.current = setTimeout(() => {
        setActiveSubDropdown(null)
        setActiveSubSubDropdown(null)
      }, 200)
    } else if (level === 'subSubDropdown') {
      subSubDropdownTimeout.current = setTimeout(() => {
        setActiveSubSubDropdown(null)
      }, 200)
    }
  }

  const toggleDropdown = id => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const toggleSubDropdown = id => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id)
  }

  const closeAllMenus = () => {
    setIsOpen(false)
    setActiveDropdown(null)
    setActiveSubDropdown(null)
    setActiveSubSubDropdown(null)
  }

  const openDropdown = navItem => {
    if (navItem.dropdown) {
      toggleDropdown(navItem.id)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <header
      className={`transition-all duration-500 bg-white shadow-lg pr-2 ${
        isFixed && !isOpen ? 'fixed top-0 w-full z-50' : 'relative '
      } ${isHidden ? '-top-[150px] opacity-0 z-[0]' : 'top-0'}`}
    >
      <div className='xxxl:w-10/12 xl:w-[95%] xsm:w-10/12 xs:mx-auto xsm:mr-auto w-full'>
        <nav className='text-[16px] text-black navbar'>
          <div className='flex items-center justify-between px-4 py-4 mx-auto rounded-full'>
            {/* Logo Section */}
            <div className='flex items-center'>
              <NavLink to='/'>
                <img src={logo} alt='Logo' className='w-[110px]' />
              </NavLink>
            </div>

            {/* Main Navigation for large screens */}
            <div className='hidden space-x-4 xl:flex'>
              <ul className='flex space-x-1'>
                {navData.map(navItem => (
                  <li
                    key={navItem.id}
                    className='relative group'
                    onMouseEnter={() =>
                      handleMouseEnter(navItem.id, 'dropdown')
                    }
                    onMouseLeave={() => handleMouseLeave('dropdown')}
                  >
                    {navItem.dropdown ? (
                      <p
                        className={`flex items-center rounded-full px-4 py-2 transition duration-300 text-black font-semibold cursor-pointer
                        ${
                          navItem.dropdown && activeDropdown === navItem.id
                            ? 'bg-[rgb(32,44,69)] text-white'
                            : 'hover:bg-[rgb(32,44,69)] hover:text-white'
                        }`}
                      >
                        {navItem.title}
                        {navItem.dropdown && (
                          <span className='mt-2 ml-1'>
                            <IoIosArrowDown />
                          </span>
                        )}
                      </p>
                    ) : (
                      <NavLink
                        to={navItem.path}
                        className='flex items-center px-4 py-2 font-semibold text-black transition duration-300 rounded-full cursor-pointer hover:bg-dark-blue hover:text-white'
                      >
                        {navItem.title}
                      </NavLink>
                    )}

                    {navItem.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === navItem.id && (
                          <motion.ul
                            className='absolute left-0 mt-6 w-60 border-[rgb(6,4,4)] border-t-4 border text-black bg-white z-20'
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            variants={dropdownVariants}
                            transition={{ duration: 0.3 }}
                          >
                            {navItem.dropdown.map(submenuItem => (
                              <li
                                key={submenuItem.id}
                                className='relative border-b-0.2 border-[rgb(234,226,226)] group'
                                onMouseEnter={() =>
                                  handleMouseEnter(
                                    submenuItem.id,
                                    'subDropdown'
                                  )
                                }
                                onMouseLeave={() =>
                                  handleMouseLeave('subDropdown')
                                }
                              >
                                <NavLink
                                  to={submenuItem.path}
                                  className='flex items-center px-4 transition duration-300 text-resp-black-2 dropdown-item hover:bg-light-grey hover:text-dark-blue'
                                >
                                  <p className='flex items-center py-2 transition-transform duration-200 hover:translate-x-1'>
                                    {submenuItem.title}
                                    {submenuItem.dropdown && (
                                      <IoIosArrowForward className='ml-4' />
                                    )}
                                  </p>
                                </NavLink>

                                {submenuItem.dropdown && (
                                  <ul
                                    className={`absolute left-full top-0 mt-0 bg-white border border-gray-300 transition-all duration-300
                                    ${
                                      activeSubDropdown === submenuItem.id
                                        ? 'visible opacity-100'
                                        : 'invisible opacity-0'
                                    }`}
                                  >
                                    {submenuItem.dropdown.map(
                                      subSubmenuItem => (
                                        <li
                                          key={subSubmenuItem.id}
                                          className='relative group'
                                          onMouseEnter={() =>
                                            handleMouseEnter(
                                              subSubmenuItem.id,
                                              'subSubDropdown'
                                            )
                                          }
                                          onMouseLeave={() =>
                                            handleMouseLeave('subSubDropdown')
                                          }
                                        >
                                          <NavLink
                                            to={subSubmenuItem.path}
                                            className='flex items-center px-4 py-2 text-black transition duration-300 hover:bg-light-grey hover:text-dark-blue'
                                          >
                                            {subSubmenuItem.title}
                                          </NavLink>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            {windowWidth <= 1280 && (
              <button
                className='z-20 flex items-center xl:hidden focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <IoMdClose className='w-8 h-8' />
                ) : (
                  <IoMdMenu className='w-8 h-8' />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isOpen && windowWidth <= 1280 && (
            <div
              className='fixed top-0 left-0 z-50 w-full h-full bg-white xl:hidden' // Fixed position and full-screen coverage
              style={{ overflowY: 'auto' }} // Enable vertical scrolling
            >
              <div className='flex flex-col h-full'>
                <div className='flex justify-between p-[4rem]'>
                  {/* Logo Section and Close Button */}
                  <NavLink to='/'>
                    <img src={logo} alt='Logo' className='w-[110px]' />
                  </NavLink>
                  <button
                    className='text-black focus:outline-none'
                    onClick={() => setIsOpen(false)}
                  >
                    <IoMdClose className='w-8 h-8' />
                  </button>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex-grow pb-4 text-black bg-white shadow-lg rounded-b-2xl'
                  style={{ overflowY: 'auto' }} // Enable scrolling within the menu
                >
                  <ul className='flex flex-col px-4 py-2 space-y-2'>
                    {navData.map(navItem => (
                      <li
                        key={navItem.id}
                        className='flex flex-col border border-gray-100 rounded-lg'
                        onClick={() => openDropdown(navItem)}//all okey
                      >
                        <p
                          className={`flex items-center justify-between py-2 px-4 rounded-lg cursor-pointer   ${
                            activeDropdown === navItem.id
                              ? 'bg-[rgb(32,44,69)] text-white'
                              : 'hover:bg-[rgb(32,44,69)] hover:text-white'
                          }`}
                        >
                          {navItem.title}
                          {navItem.dropdown && (
                            <span>
                              {activeDropdown === navItem.id ? (
                                <IoIosArrowUp />
                              ) : (
                                <IoIosArrowDown />
                              )}
                            </span>
                          )}
                        </p>
                        {navItem.dropdown && activeDropdown === navItem.id && (
                          <ul className='pl-4 mt-2 space-y-2'>
                            {navItem.dropdown.map(submenuItem => (
                              <li
                                key={submenuItem.id}
                                className='flex flex-col px-4 py-2 rounded-lg cursor-pointer bg-light-grey'
                                onClick={() =>
                                  toggleSubDropdown(submenuItem.id)
                                }
                              >
                                <NavLink
                                  to={submenuItem.path}
                                  className='flex items-center justify-between text-black hover:text-dark-blue'
                                >
                                  {submenuItem.title}
                                  {submenuItem.dropdown && (
                                    <span>
                                      {activeSubDropdown === submenuItem.id ? (
                                        <IoIosArrowUp />
                                      ) : (
                                        <IoIosArrowDown />
                                      )}
                                    </span>
                                  )}
                                </NavLink>
                                {submenuItem.dropdown &&
                                  activeSubDropdown === submenuItem.id && (
                                    <ul className='pl-4 mt-2 space-y-2'>
                                      {submenuItem.dropdown.map(
                                        subSubmenuItem => (
                                          <li
                                            key={subSubmenuItem.id}
                                            className='flex flex-col px-4 py-2 rounded-lg cursor-pointer bg-light-grey hover:bg-gray-200'
                                          >
                                            <NavLink
                                              to={subSubmenuItem.path}
                                              className='text-black hover:text-dark-blue'
                                            >
                                              {subSubmenuItem.title}
                                            </NavLink>
                                          </li>
                                        )
                                      )}
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
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
