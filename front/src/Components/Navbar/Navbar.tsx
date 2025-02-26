import React from 'react'

function Navbar():React.ReactElement {
  return (
    <nav className="top-0 z-10 fixed bg-gray-900 backdrop-blur w-svw">
  <div className="flex flex-wrap justify-between items-center mx-auto p-2 max-w-screen-xl">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse font-semibold text-white text-xl">
      Gestoria Leandro Adrian Bravo
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="md:hidden inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 w-10 h-10 text-gray-500 dark:text-gray-400 text-sm" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Abrir Menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
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
        {/* <li>
          <a href="#" className="block md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 md:p-0 px-3 py-2 md:border-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Preguntas</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar