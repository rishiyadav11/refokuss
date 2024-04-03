import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
 const [images , setimages] = useState([
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"50%",left:"50%", isActive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"56%",left:"44%", isActive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"45%",left:"56%", isActive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"60%",left:"53%", isActive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"43%",left:"40%", isActive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"65%",left:"55%", isActive:false}
])
    const { scrollY,scrollYProgress,scrollX,scrollXProgress } = useScroll()

    function imageShow(arr){
      setimages(prev=>(
        prev.map((item,index)=>(
          arr.indexOf(index)==-1 ?
          ({...item,isActive:false}) 
          : ({...item,isActive:true})
        ))
      ))
    }


    scrollYProgress.on("change",(data) => {
      // console.log(Math.floor(data*100));
      switch(Math.floor(data*100)){
        case 0:
          // console.log("0");
          imageShow([])
          break;
        case 1:
          // console.log("1");
          imageShow([0])
          break;
        case 2:
          // console.log("2");
          imageShow([0,1])
          break;
        case 3:
          // console.log("3");
          imageShow([0,1,2])
          break;
        case 4:
          // console.log("4");
          imageShow([0,1,2,3])
          break;
        case 5:
          // console.log("5");
          imageShow([0,1,2,3,4])
          break;
        case 6:
          // console.log("6");
          imageShow([0,1,2,3,4,5])
           break;
      }
    })


  return (
    <div className='w-full mt-24'>
        <div className=' max-w-screen-xl mx-auto relative'>
            <h1 className='text-[38vw] text-white leading-none font-medium select-none'>work</h1>
            <div className=" absolute top-0 w-full h-full">
                {
                    images.map((elem,index)=>(
                       elem.isActive ===true ? (<img key={index} className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top, left:elem.left}} src={elem.url} alt="" />) : null
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Work