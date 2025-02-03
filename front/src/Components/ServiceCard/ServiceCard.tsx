import React from 'react'
import IService from '../../Components/ServiceCard/IService'


function ServiceCard({image,title}:IService):React.ReactElement {
  return (
    <div className='group flex flex-row gap-2 bg-white shadow-black/30 shadow-xl hover:shadow-black/50 m-auto md:m-4 my-4 p-2 rounded-md w-64 md:w-auto h-24 duration-200'>
        <div className='rounded-tl-[30px] md:rounded-tl-[70px] group-hover:rounded-tl-[20px] duration-300 overflow-hidden'>
            <img src={image} alt="" className='rounded-tl-[30px] md:rounded-tl-[20px] group-hover:rounded-tl-[20px] md:w-32 h-24 md:h-36 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-200'/>
        </div>
        <div className='w-[50%] self-center'>
            <h4 className='font-semibold text-lg text-sky-950'>{title}</h4>
          
        </div>
    </div>
  )
}

export default ServiceCard