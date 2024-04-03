import React from 'react'

function Stripe({elem}) {
  return (
    <div className='w-[20%] px-5 py-6 border-r-[1px] border-t-[1px] border-b-[1px] border-zinc-700 text-white flex justify-between mb-10'>
        <img className='h-6' src={elem.url} alt="" />
        <span>{elem.number}</span>
    </div>
  )
}

export default Stripe