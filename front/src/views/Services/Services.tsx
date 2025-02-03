import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'

function Services():React.ReactElement {
  return (
    <div className='flex flex-col justify-around gap-10 mx-10 my-28' id='servicios'>
        <h3 className='font-semibold text-2xl text-center text-cyan-950'>Conocé acerca de nuestros serviciós</h3>
        <div className='md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-auto-ss-151x202.webp" title="Auto" ></ServiceCard>
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-hogar-ss-151x202.webp" title="Hogar" ></ServiceCard>
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-moto-ss-151x202.webp" title="Moto" ></ServiceCard>
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-ap-ss-151x202.webp" title="Accidentes Personales" ></ServiceCard>
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-iicc-ss-151x202.webp" title="Integral de Comercio" ></ServiceCard>
            <ServiceCard image="https://content.gruposancristobal.com/marketing-digital/images/sitio-seguro/cards/card-retiro-ss-152x202.webp" title="Seguro de Retiro" ></ServiceCard>
        </div>
    </div>
  )
}

export default Services