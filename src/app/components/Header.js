'use client'
import React, { useState, useEffect, useRef } from 'react';
import { MdMenu, MdClose, MdHome, MdCategory, MdSearch, MdPerson } from 'react-icons/md';
import Link from 'next/link';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef(null);
  const categoriesDropdownRef = useRef(null); // Add a new useRef for the categories dropdown
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false); // Add the state variable
  const handleCategoriesDropdownClick = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const handleSearchButtonClick = () => {
    setShowSearchField(!showSearchField);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }

      if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target)) {
        setShowCategoriesDropdown(false);
      }
    };

    if (isMobile && isMenuOpen) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobile, isMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 bg-gray-900 text-white py-4 ${isMobile ? 'md:hidden' : 'hidden md:flex'}`}>
      <div className="container mx-auto px-4 flex items-center">
        {/* Hamburger button for mobile */}
        {isMobile ? (
          <div className="hamburger p-2 h-8 w-8 flex items-center justify-center rounded-md text-white bg-gray-800" onClick={toggleMobileMenu}>
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        ) : null}
        {/* Logo section (hide when mobile navigation is open) */}
        {!isMobile || !isMenuOpen ? (
          <div className="logo">
            <a href="#" className="text-2xl font-bold ml-10">
              Watch Store
            </a>
          </div>
        ) : null}

        {/* Mobile navigation menu for smaller screens. Initially hidden, shown below the header when the hamburger is clicked. */}
        {isMobile && isMenuOpen && (
          <nav className="mobile-nav" ref={navigationRef}>
            {/* Navigation links for mobile devices. Initially hidden, shown when hamburger is clicked. */}
            <ul className="nav-links">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  <MdHome /> Home
                </a>
              </li>
              {/* Categories dropdown for mobile */}
              <li className="relative" ref={categoriesDropdownRef}>
                <button
                  className="block py-2 px-4 hover:bg-gray-700"
                  onClick={handleCategoriesDropdownClick}
                >
                  <MdCategory /> Categories
                </button>
                {showCategoriesDropdown && (
                  <ul className="absolute left-0 bg-gray-900 text-white py-2 px-4 rounded-md mt-2">
                    <li>
                      <a href="#" className="block hover:text-gray-400">
                        Men's Watches
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block hover:text-gray-400">
                        Women's Watches
                      </a>
                    </li>
                    {/* Add more categories as needed. */}
                  </ul>
                )}
              </li>

              <li>
               <Link href="/Account" >   <a className="block py-2 px-4 hover:bg-gray-700">
                  <MdPerson /> Account
                </a></Link>
             
               
              </li>
            </ul>
          </nav>
        )}

        {/* Desktop navigation menu for larger screens. Initially hidden on small screens. */}
        {!isMobile && (
          <nav className="desktop-nav ml-20">
            {/* Navigation links for desktop devices. */}
            <ul className="nav-links flex">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  <MdHome /> Home
                </a>
              </li>
              {/* Categories dropdown for desktop */}
              <li className="relative" ref={categoriesDropdownRef}>
                <button
                  className="block py-2 px-4 hover:bg-gray-700"
                  onClick={handleCategoriesDropdownClick}
                >
                  <MdCategory /> Categories
                </button>
                {showCategoriesDropdown && (
                  <ul className="absolute left-0 bg-gray-900 text-white py-2 px-4 rounded-md mt-2">
                    <li>
                      <a href="#" className="block hover:text-gray-400">
                        Men's Watches
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block hover:text-gray-400">
                        Women's Watches
                      </a>
                    </li>
                    {/* Add more categories as needed. */}
                  </ul>
                )}
              </li>

              <li>
              <Link href="/Account" className="block py-2 px-4 hover:bg-gray-700"><MdPerson /> Account</Link>
              
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
