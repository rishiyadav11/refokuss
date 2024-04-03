import React from 'react'

function Footer() {
  return (
    <div className='text-zinc-500 w-full py-5 flex gap-10 pl-14 text-sm'>
        {
            ["Privacy Policy","Cookie Policy","Impressum","Terms"].map((elem,key)=>(
                <a key={key}   href='#'>{elem}</a>
            ))
        }
    </div>
  )
}

export default Footer