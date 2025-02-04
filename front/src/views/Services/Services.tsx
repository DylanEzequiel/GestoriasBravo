import React from 'react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'

function Services():React.ReactElement {
  return (
    <div className='flex flex-col justify-around gap-10 mx-10 my-28' id='servicios'>
        <h3 className='font-semibold text-2xl text-center text-cyan-950'>Conocé acerca de nuestros serviciós</h3>
        <div className='md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
          <a href="https://www.sancristobal.com.ar/pas/gestoria-bravo/cotizar">
            <ServiceCard image="https://images.pexels.com/photos/8387455/pexels-photo-8387455.jpeg?auto=compress&cs=tinysrgb&w=400" title="Auto" ></ServiceCard>

          </a>
          <a href="https://www.sancristobal.com.ar/pas/gestoria-bravo/seguro-hogar">
            <ServiceCard image="https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" title="Hogar" ></ServiceCard>

          </a>
          <a href="https://www.sancristobal.com.ar/otros-riesgos/moto">
            <ServiceCard image="https://images.pexels.com/photos/27680615/pexels-photo-27680615/free-photo-of-a-man-is-sitting-on-a-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" title="Moto" ></ServiceCard>

          </a>
          <a href="https://www.sancristobal.com.ar/otros-riesgos/accidentes-personales">
            <ServiceCard image="https://images.pexels.com/photos/16749335/pexels-photo-16749335/free-photo-of-grinder-working-in-mask.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" title="Accidentes Personales" ></ServiceCard>

          </a>
          <a href="https://www.sancristobal.com.ar/otros-riesgos/integral-de-comercio">
            <ServiceCard image="https://images.pexels.com/photos/696205/pexels-photo-696205.jpeg?auto=compress&cs=tinysrgb&w=400" title="Integral de Comercio" ></ServiceCard>

          </a>
          <a href="https://www.sancristobal.com.ar/pas/gestoria-bravo/seguros-de-retiro/cotizar">
            <ServiceCard image="https://images.pexels.com/photos/5637535/pexels-photo-5637535.jpeg?auto=compress&cs=tinysrgb&w=400" title="Seguro de Retiro" ></ServiceCard>

          </a>
        </div>
    </div>
  )
}

export default Services