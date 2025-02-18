import React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { FaBriefcaseMedical, FaPiggyBank } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'

function WhyUs():React.ReactElement {
  return (
    <div className='md:px-10' id='nosotros'>  
        <article className='m-4 md:m-10 md:mx-14'>
            <div className="flex md:flex-row flex-col bg-white shadow-md rounded-lg overflow-hidden">
        
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1413761479/es/foto/pareja-madura-que-se-re%C3%BAne-con-asesor-financiero-para-inversiones.jpg?s=612x612&w=0&k=20&c=48v-6w9CkK-uOyD2d5uTChS9EOlCv-bTELZaWw6jCd4="
              alt="Handshake"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-blue-700 p-8 w-full md:w-1/2 text-white">
            <h5 className="mb-2 font-semibold md:font-bold text-sm uppercase tracking-widest">
            Quienes somos?
            </h5>
            <h3 className="mb-4 font-extrabold text-xl md:text-3xl">
              Nuestra mision y valores!
            </h3>
            <p className="text-base">
            Estamos Dispuestos a crecer en el mercado asegurador. Queremos brindarte el mejor servicio acorde a tus necesidades, Te vamos a ayuda a cuidar tu patrimonio, a que ahorres dinero y duermas tranquilo/a.
            </p>
            <div className="mt-6">
              <b>Leandro Adrian Bravo</b>
              <p className="text-sm italic">Productor Asesor de Seguros</p>
            </div>
          </div>
        </div>
        </article>
      <article className='flex md:flex-row flex-col flex-wrap justify-center gap-4 lg:gap-10'>

        <div className='group flex flex-col self-center gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 text-center hover:-translate-y-1 duration-200'>
          <FaBriefcaseMedical size={40} className='group-hover:text-blue-700 self-center duration-200'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Seguridad</h3>
            {/* <p className='font-medium text-gray-900 text-sm'>Ofrecemos servicios de salud confiables y accesibles para ti y tu familia.</p> */}
          </div>
        </div>

        <div className='group flex flex-col self-center gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 text-center hover:-translate-y-1 duration-200'>
          <RiCustomerService2Fill size={40} className='group-hover:text-blue-700 self-center duration-200'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Responsabilidad</h3>
            {/* <p className='font-medium text-gray-900 text-sm'>Atención personalizada 24/7. Nuestro equipo está listo para ayudarte en cualquier momento.</p> */}
          </div>
        </div>

        <div className='group flex flex-col self-center gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 text-center hover:-translate-y-1 duration-200'>
          <FaHandsHelping size={40} className='group-hover:text-blue-700 self-center duration-200'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Atención</h3>
            {/* <p className='font-medium text-gray-900 text-sm'>Más de 3 años brindando un servicio seguro y de calidad. Confianza y compromiso en cada paso.</p> */}
          </div>
        </div>

        <div className='group flex flex-col self-center gap-4 bg-white shadow-md hover:shadow-blue-950 p-2 border-b-2 border-b-blue-700 w-48 text-center hover:-translate-y-1 duration-200'>
          <FaPiggyBank  size={40} className='group-hover:text-blue-700 self-center duration-200'/>
          <div>
            <h3 className='py-3 font-semibold text-xl'>Confianza</h3>
            {/* <p className='font-medium text-gray-900 text-sm'>Los mejores precios sin comprometer la calidad. Ahorra con nosotros sin preocupaciones.</p> */}
          </div>
        </div>
      </article>
    </div>
  )
}

export default WhyUs