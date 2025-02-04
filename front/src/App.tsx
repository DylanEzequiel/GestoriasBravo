
import { useEffect, useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Wsp from './Components/Wsp/Wsp'
import Contact from './views/Contact/Contact'
import Home from './views/home/Home'
import Services from './views/Services/Services'
import WhyUs from './views/WhyUs/WhyUs'


import { AiOutlineLoading } from 'react-icons/ai'

function Loader():React.ReactElement {
  return (
    <div className='flex flex-col justify-center items-center m-auto'>
        <div className=''>
          <AiOutlineLoading className='animate-spin size-20' />
        </div>
        <h2 className='mt-10 font-semibold text-xl'>Cargando...</h2>
    </div>
  )
}
function App() {
  const [loading,setLoading]=useState<Boolean>(true)

  //To do:
  //Loader al abrir pag 
  //Animacion de desplazar hacia arriba apenas se enfoca el elemento
  //Optimizar seo

  useEffect(() => {
    // Simula la carga de contenido (puede ser una llamada a una API)
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simula 2 segundos de carga
  }, []);

  return (
    <div className='bg-[#e9ecec] min-w-svw min-h-svh'>
      {loading?(<>
      <div className={`${loading?"flex justify-center absolute self-center bg-[#e9ecec] z-30":"none"} h-full w-full`}>
        <Loader></Loader>
      </div>
      
      </>):(<>
        <Navbar></Navbar>
        <div className='bg-[#e9ecec] m-auto max-w-7xl'>
          <Home/>
          <WhyUs/>
          <Services/>
          <Contact/>
        </div>
        <Footer></Footer>
        <Wsp></Wsp>
      
      </>)}

    </div>
  )
}

export default App
