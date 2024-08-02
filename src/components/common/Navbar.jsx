import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navData } from '../../data/navbar-links';
import logo from '../../assets/logo.webp';
import '../../App.css'; // Your custom styles

const Navbar = () => {
  // State to manage the mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track the active dropdown menu
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // State to track the active sub-dropdown menu
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  // Function to toggle the main dropdown menu
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Function to toggle the sub-dropdown menu
  const toggleSubDropdown = (id) => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  // Function to handle mouse enter event for dropdowns
  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  // Function to handle mouse leave event to close dropdown
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <section>
      <div>
        <nav className="bg-white text-black text-lg font-open-sans">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between rounded-full">
            {/* Logo Section */}
            <div>
              <NavLink to="/">
                <img src={logo} alt="Logo" className="h-20" />
              </NavLink>
            </div>

            {/* Main Navigation for large screens */}
            <div className="hidden xl:flex space-x-4">
              <ul className="flex space-x-1">
                {navData.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(navItem.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Main Navigation Link */}
                    <NavLink
                      to={navItem.path}
                      className={`flex items-center rounded-full px-4 py-1 transition duration-300 text-black font-bold
                      ${navItem.dropdown && activeDropdown === navItem.id ? 'bg-[rgb(32,44,69)] text-white' : 'hover:bg-[rgb(32,44,69)] hover:text-white'}`}
                    >
                      {navItem.title}
                      {navItem.dropdown && <span className='mt-2 ml-1'><IoIosArrowDown /></span>}
                    </NavLink>
                    
                    {/* Dropdown Menu */}
                    {navItem.dropdown && (
                      <ul className={`absolute left-0 mt-4 w-60 border-l border-r border-b border-gray-300 border-t-4 border-t-gray-500 text-black bg-white transition-all duration-300 ease-in-out overflow-hidden transform ${activeDropdown === navItem.id ? 'max-h-screen opacity-100 translate-y-2' : 'max-h-0 opacity-0'}`}>
                        {navItem.dropdown.map((submenuItem) => (
                          <li key={submenuItem.id} className="relative">
                            {/* Submenu Link */}
                            <NavLink
                              to={submenuItem.path}
                              className="block px-4 py-2 transition duration-300 text-black hover:bg-[rgb(234,234,234)] dropdown-item"
                            >
                              {submenuItem.title}
                              {submenuItem.dropdown && <IoIosArrowDown className="ml-2" />}
                            </NavLink>
                            
                            {/* Sub-dropdown Menu */}
                            {submenuItem.dropdown && (
                              <ul className={`absolute whitespace-normal left-full top-0 mt-2 w-64 bg-gray-800 text-white border-l border-r border-b border-gray-300 border-t-4 border-t-gray-500 transition-all duration-300 ease-in-out overflow-hidden transform ${activeDropdown === submenuItem.id ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0'}`}>
                                {submenuItem.dropdown.map((subSubmenuItem) => (
                                  <li key={subSubmenuItem.id} className="relative">
                                    {/* Sub-submenu Link */}
                                    <NavLink
                                      to={subSubmenuItem.path}
                                      className="block px-4 py-2 transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-regular whitespace-normal dropdown-item"
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

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776;
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} bg-white text-black text-sm`}>
            <ul>
              {navData.map((navItem) => (
                <li key={navItem.id} className="relative">
                  <div className="flex justify-between items-center">
                    {/* Mobile Navigation Link */}
                    <NavLink
                      to={navItem.path}
                      className="block w-full px-4 py-2 text-left transition duration-300 hover:bg-[rgb(24,83,210)] text-black font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {navItem.title}
                      {navItem.dropdown && ''}
                    </NavLink>
                    
                    {/* Mobile Dropdown Toggle Button */}
                    {navItem.dropdown && (
                      <button
                        onClick={() => toggleDropdown(navItem.id)}
                        className="px-4 py-2 text-left transition duration-300 rounded-full"
                      >
                        {activeDropdown === navItem.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Menu */}
                  {navItem.dropdown && activeDropdown === navItem.id && (
                    <ul className={`bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden ${activeDropdown === navItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      {navItem.dropdown.map((submenuItem) => (
                        <li key={submenuItem.id} className="relative">
                          <div className="flex justify-between items-center group border-2">
                            {/* Mobile Submenu Link */}
                            <NavLink
                              to={submenuItem.path}
                              className="block w-full px-4 py-2 text-left transition duration-300 rounded-full hover:bg-[rgb(78,122,216)] text-black font-regular whitespace-normal border-l-4 border-transparent dropdown-item"
                              onClick={() => setIsOpen(false)}
                            >
                              {submenuItem.title}
                              {submenuItem.dropdown && <IoIosArrowDown className="ml-2" />}
                            </NavLink>
                            
                            {/* Mobile Sub-dropdown Toggle Button */}
                            {submenuItem.dropdown && (
                              <button
                                onClick={() => toggleSubDropdown(submenuItem.id)}
                                className="px-4 py-2 text-left transition duration-300 rounded-full"
                              >
                                {activeSubDropdown === submenuItem.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                              </button>
                            )}
                          </div>
                          
                          {/* Mobile Sub-dropdown Menu */}
                          {submenuItem.dropdown && activeSubDropdown === submenuItem.id && (
                            <ul className={`bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden ${activeSubDropdown === submenuItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                              {submenuItem.dropdown.map((subSubmenuItem) => (
                                <li key={subSubmenuItem.id}>
                                  {/* Mobile Sub-submenu Link */}
                                  <NavLink
                                    to={subSubmenuItem.path}
                                    className="block px-4 py-2 transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-regular whitespace-normal dropdown-item"
                                    onClick={() => setIsOpen(false)}
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
    </section>
  );
};

export default Navbar;
