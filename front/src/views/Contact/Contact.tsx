import React from 'react'

function Contact():React.ReactElement {
  return (
    <div className='flex flex-col justify-center px-10 py-4 w-full' id='contacto'>
        <h2 className='m-auto font-semibold text-2xl text-sky-950'>
          ¿Donde Encontrarnos?
        </h2> 
        <article className="flex md:flex-row flex-col justify-center shadow-black/50 shadow-lg mt-10 rounded-xl w-full h-svh md:h-[400px] overflow-hidden" >
          <main className="bg-white p-4">
              <div className='pt-10'>
                <b className='text-gray-600 text-xl'>Dirección</b>
                <p className='flex flex-col pt-2'>
                  <span>Calle 1268 490, Ingeniero Juan Allan</span>
                  <span>Provincia de Buenos Aires, Argentina.</span>
                </p>
              </div>
              <div className='pt-10'>
                <b className='text-gray-600 text-xl'>Horarios De Atención</b>
                <p className='pt-2'>Lunes a Viernes de 08:00 a 18:30 hs.</p>
                <p>Sábados de 08:00 a 14:00 hs.</p>
              </div>
          </main>
          <aside className="w-full md:w-[75%] h-full">
         
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.7382788057403!2d-58.191443115986104!3d-34.860295368898335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7f531b8c203%3A0x4093e8685f3522d5!2sSeguros%20Generales%20Gestoria%20Automotor%20Leandro%20Adrian%20Bravo!5e0!3m2!1ses-419!2sar!4v1737053427551!5m2!1ses-419!2sar"
              className="w-full h-full"
            ></iframe>
          </aside>
      </article>
    </div>
  )
}

export default Contact
