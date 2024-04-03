import { motion } from 'framer-motion'
import React from 'react'

function Marquee({item ,direction}) {

  return (
    <div className='  text-white flex w-full py-8 gap-20 overflow-hidden'>
      <motion.div initial = {{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{repeat: Infinity,    ease:"linear", duration:12}} className="flex flex-shrink-0 gap-20 py-10 pr-15">
      {item.map((elem,key)=>(
        <img className='' src={elem} key={key} alt="" />
      ))}
      </motion.div>
      <motion.div initial = {{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{repeat: Infinity,    ease:"linear", duration:12}} className="flex flex-shrink-0 gap-20 py-10 pr-15">
      {item.map((elem,key)=>(
        <img className='' src={elem} key={key} alt="" />
      ))}
      </motion.div>
    </div>
  )
}

export default Marquee
