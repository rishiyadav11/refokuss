import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,contact,para,start,hover="false"}) {
  
    const data =[
        {heading:"Up Next:News",secondheading:"Insights and behind the scenes"},
        {heading:"Get in Touch",secondheading:"Let's get to it,together"}
    ]
  return (
    <motion.div const whileHover = {{ backgroundColor: hover === "true" && "#7443FF", padding:"25px" }}
    className={` text-white bg-zinc-800 p-5 rounded-xl ${width} min-h-96 flex flex-col justify-between `}> 
 <div className='w-full '>
    <div className="w-full flex justify-between ">
    {start && <h3 className=''>{data[1].heading}</h3>}
    {!start && <h3 className=''>{data[0].heading}</h3>}
        <FaArrowRightLong/>
    </div>
    {start && <h3 className='text-3xl font-medium mt-5'>{data[1].secondheading}</h3>}
{!start && <h3 className='text-3xl font-medium mt-5'>{data[0].secondheading}</h3>}


</div>
<div className="down w-full ">
   {start===true &&  <h1 className=' text-8xl  font-semibold tracking-tight leading-none'>Start a Project</h1>}
    {contact==true && <button className=' mt-4  rounded-full py-3 px-4 border-[1px] border-zinc-200'>Contact us</button>}
    {para ===true && <p className='text-sm text-zinc-500 font-medium'> Lorem ipsum dolor sit amet consectetur.</p>}
</div>
    </motion.div>
  )
}

export default Card