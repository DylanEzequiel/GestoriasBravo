import React from 'react'

function Navbar():React.ReactElement {
  return (
    <nav className="top-0 z-10 fixed bg-gray-900 backdrop-blur w-svw">
  <div className="flex flex-wrap justify-between items-center mx-auto p-2 max-w-screen-xl">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="pl-2 font-semibold text-xl dark:text-white whitespace-nowrap self-center">Gestorias Bravo</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex justify-center items-center md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 w-10 h-10 text-gray-500 text-sm dark:text-gray-400 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Abrir Menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="md:block hidden w-full md:w-auto" id="navbar-default">
      <ul className="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-gray-700 mt-4 md:mt-0 p-4 md:p-0 pr- border rounded-lg font-medium text-md">
        <li>
          <a href="#" className="block bg-blue-700 md:bg-transparent px-3 py-2 md:p-0 rounded text-white md:text-blue-700" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Servicios</a>
        </li>
        <li>
          <a href="#" className="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Nosotros</a>
        </li>
        <li>
          <a href="#" className="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Contacto</a>
        </li>
        <li>
          <a href="#" className="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Preguntas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar