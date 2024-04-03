import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
function Button({title ="Start a Project"}) {
  return (
    <div className='min-w-36 px-4 py-2 bg-slate-200 rounded-full flex items-center gap-3 cursor-pointer '>
        <span className='text-sm font-min text-black'>{title}</span>
        <IoMdReturnRight className='text-sm font-thin'/>
    </div>
  )
}

export default Button