
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Wsp from './Components/Wsp/Wsp'
import Contact from './views/Contact/Contact'
import Home from './views/home/Home'
import Services from './views/Services/Services'
import WhyUs from './views/WhyUs/WhyUs'

function App() {

  return (
    <div className='bg-[#e9ecec] min-w-svw min-h-svh'>
      <Navbar></Navbar>
      <div className='bg-[#e9ecec] m-auto max-w-7xl'>
        <Home/>
        <WhyUs/>
        <Services/>
        <Contact/>
      </div>
      <Footer></Footer>
      <Wsp></Wsp>
    </div>
  )
}

export default App
