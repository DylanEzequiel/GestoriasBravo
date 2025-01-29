import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Wsp():React.ReactElement {
  return (
    <div className='right-20 bottom-8 fixed bg-white bg-gradient-to-r shadow-black/60 shadow-md mb-2 p-1 rounded-full text-sm text-white'>
        <a href="" className='text-green-600'>
            <FaWhatsapp size={35} className=' '/>
        </a>
    </div>
  )
}

export default Wsp