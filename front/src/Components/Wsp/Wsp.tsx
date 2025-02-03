import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Wsp():React.ReactElement {
  return (
    <div className='right-20 bottom-8 fixed hover:scale-105 bg-white bg-gradient-to-r shadow-black/60 shadow-md mb-2 p-1 rounded-full text-sm text-white duration-200'>
        <a href="https://wa.me/message/UT3ISYWZ7VVIG1" className='text-green-600'>
            <FaWhatsapp size={35} className=' '/>
        </a>
    </div>
  )
}

export default Wsp