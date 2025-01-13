import React from 'react'

function Footer() {
  return (
    <nav class="border-gray-200 bg-white dark:bg-gray-900">
  <div class="flex flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="font-semibold text-2xl dark:text-white whitespace-nowrap self-center">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex justify-center items-center md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 w-10 h-10 text-gray-500 text-sm dark:text-gray-400 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="md:block hidden w-full md:w-auto" id="navbar-default">
      <ul class="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-gray-700 bg-gray-50 md:bg-white md:dark:bg-gray-900 dark:bg-gray-800 mt-4 md:mt-0 p-4 md:p-0 border rounded-lg font-medium">
        <li>
          <a href="#" class="block bg-blue-700 md:bg-transparent px-3 py-2 md:p-0 rounded text-white md:text-blue-700 md:dark:text-blue-500 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">About</a>
        </li>
        <li>
          <a href="#" class="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Footer