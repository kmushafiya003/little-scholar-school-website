import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navData } from '../../data/navbar-links';
import logo from '../../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleSubDropdown = (id) => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <section>
      <div>
        <nav className="bg-white text-black text-lg font-open-sans">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between rounded-full">
            <div className="text-xl font-bold">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="h-20" />
              </NavLink>
            </div>

            {/* mapping through main navdata */}
            <div className="hidden xl:flex space-x-4">
              <ul className="flex space-x-4">
                {navData.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(navItem.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={navItem.path}
                      className={`flex items-center rounded-full px-4 py-1 transition duration-300 text-black font-bold
                      ${navItem.dropdown && activeDropdown === navItem.id ? 'bg-[rgb(32,44,69)] text-white' : 'hover:bg-[rgb(32,44,69)] hover:text-white'}`}
                    >
                      {navItem.title}
                      {navItem.dropdown && <span className='mt-1 ml-1'><IoIosArrowDown /></span>}
                    </NavLink>
                    {navItem.dropdown && (
                      <ul className={`absolute left-0 mt-1 w-60 border border-gray-300 text-black bg-white transition-all duration-300 ease-in-out overflow-hidden transform ${activeDropdown === navItem.id ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0'}`}>
                        {navItem.dropdown.map((submenuItem) => (
                          <li key={submenuItem.id} className="relative group">
                            <NavLink
                              to={submenuItem.path}
                              className="block px-4 py-2 transition duration-300 text-black hover:bg-[rgb(234,234,234)] hover:border-l-2 border-teal-600 bg-teal-400 p-8 font-regular whitespace-nowrap" // Apply regular font weight and prevent text wrapping
                            >
                              {submenuItem.title}
                              {submenuItem.dropdown && <IoIosArrowDown className="ml-2" />}
                            </NavLink>
                            {submenuItem.dropdown && (
                              <ul className={`absolute left-full top-0 mt-2 w-64 bg-gray-800 text-white border border-gray-300 transition-all duration-300 ease-in-out overflow-hidden transform ${activeDropdown === submenuItem.id ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0'}`}>
                                {submenuItem.dropdown.map((subSubmenuItem) => (
                                  <li key={subSubmenuItem.id}>
                                    <NavLink
                                      to={subSubmenuItem.path}
                                      className="block px-4 py-2 transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-regular whitespace-nowrap" // Apply regular font weight and prevent text wrapping
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
            <button
              className="xl:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776;
            </button>
          </div>
          <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} bg-white text-black text-sm`}>
            <ul>
              {navData.map((navItem) => (
                <li key={navItem.id} className="relative">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to={navItem.path}
                      className="block w-full px-4 py-2 text-left transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {navItem.title}
                      {navItem.dropdown && <IoIosArrowDown className="ml-2" />}
                    </NavLink>
                    {navItem.dropdown && (
                      <button
                        onClick={() => toggleDropdown(navItem.id)}
                        className="px-4 py-2 text-left transition duration-300 rounded-full"
                      >
                        {activeDropdown === navItem.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </button>
                    )}
                  </div>
                  {navItem.dropdown && activeDropdown === navItem.id && (
                    <ul className={`bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden ${activeDropdown === navItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      {navItem.dropdown.map((submenuItem) => (
                        <li key={submenuItem.id} className="relative">
                          <div className="flex justify-between items-center">
                            <NavLink
                              to={submenuItem.path}
                              className="block w-full px-4 py-2 text-left transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-regular whitespace-nowrap" // Apply regular font weight and prevent text wrapping
                              onClick={() => setIsOpen(false)}
                            >
                              {submenuItem.title}
                              {submenuItem.dropdown && <IoIosArrowDown className="ml-2" />}
                            </NavLink>
                            {submenuItem.dropdown && (
                              <button
                                onClick={() => toggleSubDropdown(submenuItem.id)}
                                className="px-4 py-2 text-left transition duration-300 rounded-full"
                              >
                                {activeSubDropdown === submenuItem.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                              </button>
                            )}
                          </div>
                          {submenuItem.dropdown && activeSubDropdown === submenuItem.id && (
                            <ul className={`bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden ${activeSubDropdown === submenuItem.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                              {submenuItem.dropdown.map((subSubmenuItem) => (
                                <li key={subSubmenuItem.id}>
                                  <NavLink
                                    to={subSubmenuItem.path}
                                    className="block px-4 py-2 transition duration-300 rounded-full hover:bg-[rgb(32,44,69)] text-white font-regular whitespace-nowrap" // Apply regular font weight and prevent text wrapping
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
