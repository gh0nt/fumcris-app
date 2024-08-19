import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img className="h-16" src="/img/logo-navbar.jpeg" alt="FUMCRIS" />
        <div className="flex items-center">
          {/* Menu en vista de escritorio */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="mySkills"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Nuestra Experiencia
                </Link>
              </li>
            </ul>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="btn bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
            >
              Contáctanos
            </Link>
          </div>
          {/* MENÚ VISTA MÓVIL */}
          <div className={`lg:hidden ${navActive ? 'block' : 'hidden'} absolute top-16 right-0 bg-white shadow-lg w-full`}>
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="text-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="mySkills"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  Nuestra Experiencia
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="btn bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="lg:hidden flex flex-col space-y-1 ml-4"
            onClick={toggleNav}
          >
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
