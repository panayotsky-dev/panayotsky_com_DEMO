import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-Kanit'>
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}                                                                                                                                          /*1:2.4 */
        transition={{
            duration: 0.9,
        }}
        whileInView={{ 
            opacity:1,
             x:0
            }}    /* do animation only if you are starting to view the image*/
        viewport={{once:true}} /* do animation only once,when you see it once stop doing it*/
         src="aboutMePic.jpg"
         className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
         />

         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl text-center font-semibond'>    Here is a{" "} 
            <span className='underline decoration-[#d106ca91]/40'> little</span> background</h4>{" "}
            <p className='text-center'>Asadad asd asd asd a sd ad asd asdaegrgh  hty ht hth rhg trh
            fsdfs ghgrth qeiqweqlqw qwehqleiwqhe qwie hqwie</p>
         </div>
    </motion.div>
  )
}