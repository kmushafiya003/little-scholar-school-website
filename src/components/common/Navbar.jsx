import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp } from "react-icons/io";
import { navData } from '../../data/navbar-links'; // Adjust path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage open submenu
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // State to manage open sub-submenu

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleSubDropdown = (id) => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  return (
    <section>
      <div>
        <nav className="bg-white text-black">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between rounded-full">
            <div className="text-xl font-bold">
              <NavLink to="/" className="hover:text-red-500 transition duration-300">Brand</NavLink>
            </div>
            <div className="hidden xl:flex space-x-4">
              {navData.map((navItem) => (
                <div key={navItem.id} className="relative group">
                  <NavLink to={navItem.path} className="px-4 py-2 hover:bg-red-500 hover:text-white bg-red transition duration-300">
                    {navItem.title}
                  </NavLink>
                  {navItem.dropdown && (
                    <div className="absolute left-0 hidden mt-2 w-48 bg-gray-800 text-white bg-red border-l-2 transition-all duration-300 ease-in-out transform opacity-0 group-hover:flex group-hover:flex-col group-hover:translate-y-0 group-hover:opacity-100 -translate-y-4">
                      {navItem.dropdown.map((submenuItem) => (
                        <div key={submenuItem.id} className="relative group">
                          <NavLink to={submenuItem.path} className="block px-4 py-2 hover:bg-red-500 transition duration-300 ">
                            {submenuItem.title}
                          </NavLink>
                          {submenuItem.dropdown && (
                            <div className="absolute left-full top-0 hidden mt-2 w-48 bg-gray-800 text-white transition-all duration-300 ease-in-out transform opacity-0 group-hover:flex group-hover:flex-col  group-hover:translate-y-0 group-hover:opacity-100 -translate-y-4">
                              {submenuItem.dropdown.map((subSubmenuItem) => (
                                <NavLink key={subSubmenuItem.id} to={subSubmenuItem.path} className="block px-4 py-2 hover:bg-red-500 transition duration-300">
                                  {subSubmenuItem.title}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} bg-white text-black`}>
            {navData.map((navItem) => (
              <div key={navItem.id} className="relative">
                <div className="flex justify-between items-center">
                  <NavLink
                    to={navItem.path}
                    className="block w-full px-4 py-2 text-left hover:bg-red-500 hover:text-white transition duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on item click
                  >
                    {navItem.title}
                  </NavLink>
                  {navItem.dropdown && (
                    <button
                      onClick={() => toggleDropdown(navItem.id)}
                      className="px-4 py-2 text-left hover:bg-red-500 transition duration-300"
                    >
                      {activeDropdown === navItem.id ? '\u25B2' : '\u25BC'}
                    </button>
                  )}
                </div>
                {navItem.dropdown && activeDropdown === navItem.id && (
                  <div className="bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden max-h-0 max-h-screen">
                    {navItem.dropdown.map((submenuItem) => (
                      <div key={submenuItem.id} className="relative">
                        <div className="flex justify-between items-center">
                          <NavLink
                            to={submenuItem.path}
                            className="block w-full px-4 py-2 text-left hover:bg-red-500 transition duration-300"
                            onClick={() => setIsOpen(false)} // Close menu on item click
                          >
                            {submenuItem.title}
                          </NavLink>
                          {submenuItem.dropdown && (
                            <button
                              onClick={() => toggleSubDropdown(submenuItem.id)}
                              className="px-4 py-2 text-left hover:bg-red-500 transition duration-300"
                            >
                              {activeSubDropdown === submenuItem.id ? <IoIosArrowUp /> : '\u25BC'}
                            </button>
                          )}
                        </div>
                        {submenuItem.dropdown && activeSubDropdown === submenuItem.id && (
                          <div className="bg-gray-800 text-white transition-max-height duration-300 ease-in-out overflow-hidden max-h-0 max-h-screen">
                            {submenuItem.dropdown.map((subSubmenuItem) => (
                              <NavLink
                                key={subSubmenuItem.id}
                                to={subSubmenuItem.path}
                                className="block px-4 py-2 hover:bg-red-500 transition duration-300"
                                onClick={() => setIsOpen(false)} // Close menu on item click
                              >
                                {subSubmenuItem.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
