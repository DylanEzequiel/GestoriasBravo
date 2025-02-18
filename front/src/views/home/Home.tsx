import React from 'react'

function Home():React.ReactElement {
  return (
    <article className='flex flex-row justify-center py-44 h-svh max-h-[1200px]' id='home'>
        <main className='flex flex-col justify-start self-center gap-3 pl-24 md:w-[75%]'>
            <h2 className='flex flex-col font-semibold text-sky-950 text-2xl text-balance'>
                <span>Gestoría Leandro Adrian Bravo</span>
                <span className='font-semibold text-5xl'>Su socio de confianza en seguros</span></h2>
            {/* <p className='w-[80%] text-sm'>
            Gestoría Bravo has been providing reliable insurance solutions for over 20 years. Our mission is to protect what matters most to you.
            </p> */}
            <a href='#servicios' className='bg-orange-600 mt-4 px-4 py-1 rounded-sm w-max font-semibold text-white ba'> Servicios</a>
        </main>
        <aside className='hidden lg:inline self-center'>
            <img src="https://cdn.pixabay.com/photo/2024/02/07/15/09/business-8559280_1280.png" alt="Person standing"
            className='w-[900px] h-auto'
            style={{
                filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.377))',
              }} />
        </aside>
    </article>
  )
}

export default Home