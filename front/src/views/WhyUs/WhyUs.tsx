import React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { FaBriefcaseMedical, FaPiggyBank } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'

function WhyUs():React.ReactElement {
  return (
    <div className='min-h-svh'>  
        <article className='m-10 mx-14'>
            <div className="flex md:flex-row flex-col bg-white shadow-md rounded-lg overflow-hidden">
          {/* Imagen de la izquierda */}
          <div className="w-full md:w-1/2">
            <img
              src="" // Cambia esto con la URL de tu imagen
              alt="Handshake"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-blue-700 p-8 w-full md:w-1/2 text-white">
            <h5 className="mb-2 font-bold text-sm uppercase tracking-widest">
            Quienes somos?
            </h5>
            <h3 className="mb-4 font-extrabold text-3xl">
              Nuestra mision y valores!
            </h3>
            <p className="text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, illo ea. Vero suscipit illo laudantium, provident perferendis cupiditate vel accusantium ipsum quasi sed assumenda ipsa, inventore tempora ratione nihil reiciendis?
            </p>
            <div className="mt-6">
              <b>Nombre encargado</b>
              <p className="text-sm italic">Rol del Titular</p>
            </div>
          </div>
        </div>
        </article>
      <article className='flex md:flex-row flex-col justify-center gap-10'>
      <div className='flex flex-col gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 hover:-translate-y-1 duration-200 group self-center'>
        <FaBriefcaseMedical size={40} className='group-hover:text-blue-700 duration-200 self-center'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Title</h3>
            <p className='font-medium text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 hover:-translate-y-1 duration-200 group self-center'>
        <RiCustomerService2Fill size={40} className='group-hover:text-blue-700 duration-200 self-center'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Title</h3>
            <p className='font-medium text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 hover:-translate-y-1 duration-200 group self-center'>
        <FaHandsHelping size={40} className='group-hover:text-blue-700 duration-200 self-center'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Title</h3>
            <p className='font-medium text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 hover:-translate-y-1 duration-200 group self-center'>
        <FaPiggyBank  size={40} className='group-hover:text-blue-700 duration-200 self-center'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Title</h3>
            <p className='font-medium text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default WhyUs