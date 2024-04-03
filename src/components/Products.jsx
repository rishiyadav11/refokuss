import React, { useState } from 'react'
import Product from './product'
import { motion } from 'framer-motion'

function Products() {
    const products =[
        {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"Cula",description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true,case:false},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false},
        {title:"Maniv",description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",live:true,case:false},
        {title:"YIR",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:false},
        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:true},
        {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",live:true,case:true},
        {title:"Jungle",description:"We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",live:true,case:true},
        {title:"Silvr",description:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",live:true,case:false},
        {title:"Remind",description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",live:true,case:true},
        {title:"Summon",description:"We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",live:true,case:true},
        {title:"Magic",description:"We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",live:true,case:true},
        {title:"RocketChat",description:"We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",live:true,case:false},
        {title:"Haufe",description:"Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.",live:true,case:false},
        {title:"YIR 2021",description:"We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",live:true,case:false},
        {title:"Weglot",description:"We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",live:true,case:false},
        {title:"Candid ",description:"A complete redesign of a health-startup website, followed by cutting edge development.",live:true,case:false},
        {title:"Showcase",description:"Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",live:true,case:false},
    ]

    let material =[
      {video:"https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp"},
      {video:"https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png"},
      {video:"https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/Maniv-Compressed.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png"},
      {video:"https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/yahoo.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/rainfall.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/jungle-4-3-.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg"},
      {video:"https://cdn.refokus.com/website/2022/videos/Silvr.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868917c44436f6a7595e4f_Work%20Background%20(1)-p-2000.jpg"},
      {video:"https://cdn.refokus.com/website/2022/videos/remind.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/summon.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299c0532977f3221f06f5_Summon%20bg-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/637e6790db842e13a0e0aa51_Work-Background-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/rocketchat.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299e14c14ec42d53e6614_RocketChat%20bg.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/haufe.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2b9a478df1ef5a0435_Haufe.de%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/yearinreview.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299a728ba3624405c1f46_Year%20in%20Review%202022%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/weglot.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299d5545a912e9e4a9cb4_Weglot%20for%20Germany%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b7dbf5f12bc6fafbfb90fa_Candid%20Work%20Background.jpg"},
      {video:"https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg-p-1600.png"}
    ]

    const [pos,setpos] = useState(0)
    const mover =(val)=>(
        setpos(val*23)
    )
  return (
    <div className='relative mt-5 '>
        {products.map((val, index) => ( 
        <Product mover={mover} index={index} key={index} val={val} background={material[index].background} />))}
        <div className=" w-full h-full hidden sm:block  absolute top-0 pointer-events-none">
            <motion.div initial={{y:pos, x:"30%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:.6}} className=" rounded-xl w-[30rem] h-[23rem] absolute left-32 overflow-hidden ml-20">
              {material.map((elem,key)=>(
                   <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} key={key} animate={{y:-pos+'rem'}} className="w-full  h-full ">
                    <video muted autoPlay loop className='w-full h-full ' src={elem.video}></video>
                   </motion.div> 
              ))}
              
             </motion.div>
        </div>
    </div>
  )
}

export default Products