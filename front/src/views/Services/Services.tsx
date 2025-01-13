import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'

function Services():React.ReactElement {
  return (
    <div className='flex flex-col justify-around mx-8 min-h-svh' id='servicios'>
        <h3 className='font-semibold text-2xl text-center text-cyan-950'>Conocé acerca de nuestros serviciós</h3>
        <div className='md:gap-6 grid grid-cols-1 md:grid-cols-3'>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>

            
        </div>
    </div>
  )
}

export default Services