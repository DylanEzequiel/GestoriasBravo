
import Navbar from './Components/Navbar/Navbar'
import Contact from './views/Contact/Contact'
import Home from './views/home/Home'
import Services from './views/Services/Services'
import WhyUs from './views/WhyUs/WhyUs'

function App() {

  return (
    <div className='bg-[#e9ecec] min-w-svw min-h-svh'>
      <Navbar></Navbar>
      <div className='m-auto'>
        <Home/>
        <WhyUs/>
        <Services/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
