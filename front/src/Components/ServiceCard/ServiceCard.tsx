import React from 'react'

function ServiceCard():React.ReactElement {
  return (
    <div className='flex flex-row gap-2 bg-white shadow-black/30 shadow-xl hover:shadow-black/50 m-auto md:m-4 my-4 p-2 rounded-md w-80 md:w-auto h-28 duration-200 group'>
        <div className='rounded-tl-[30px] md:rounded-tl-[70px] overflow-hidden'>
            <img src="https://media.istockphoto.com/id/504275900/photo/and-were-off.jpg?s=612x612&w=0&k=20&c=68uDlmlBFM46wZrB-nI9OSJYvRCVF5tO7ZFhTCUPEQU=" alt="" className='rounded-tl-[30px] md:rounded-tl-[40px] md:w-32 h-24 md:h-36 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-200'/>
        </div>
        <div className='w-[50%] self-center'>
            <h4 className='font-semibold text-lg text-sky-950'>Auto</h4>
            <p className='font-normal text-sm'>Asegurá tu auto y manejá tranquilo
            </p>
        </div>
    </div>
  )
}

export default ServiceCard