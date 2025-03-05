import React from 'react'
import ResponsiveNavbar from './NavBarResponsive/NavbarResponsive'

function Navbar():React.ReactElement {
  return (
    <nav className="top-0 z-10 fixed bg-gray-900 backdrop-blur w-svw">
  <div className="flex flex-wrap justify-between items-center mx-auto p-2 max-w-screen-xl">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse font-semibold text-white text-lg md:text-xl">
      Gestoria Leandro Adrian Bravo
    </a>
    <div className="hidden md:block pr-10 w-full md:w-auto" id="navbar-default">
      <ul className="flex md:flex-row flex-col rtl:space-x-reverse md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 pr- border border-gray-100 md:border-0 dark:border-gray-700 rounded-lg font-medium text-md">
        <li>
          <a href="#home" className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 md:p-0 px-3 py-2 md:border-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Home</a>
        </li>
        <li>
          <a href="#nosotros" className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 md:p-0 px-3 py-2 md:border-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Nosotros</a>
        </li>
        <li>
          <a href="#servicios" className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 md:p-0 px-3 py-2 md:border-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Servicios</a>
        </li>
        <li>
          <a href="#contacto" className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 md:p-0 px-3 py-2 md:border-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Contacto</a>
        </li>
      </ul>
    </div>
        <div className='md:hidden block'>
          <ResponsiveNavbar/>
        </div>
  </div>
</nav>
  )
}

export default Navbar