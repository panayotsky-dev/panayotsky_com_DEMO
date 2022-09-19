import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration:1.5}}
        className='flex relative flex-col text-center md:text-left xl:flex-rowmax-w-[200px]
         xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        >
            <h3 className='absolute top-7  uppercase tracking-[20px]  text-gray-500 text-2xl '>
            <text className='text-[#2ed3db] font-Kanit'>/</text>SKills<text className='text-[#2ed3db] '>/</text>
            </h3>
            <h3 className='absolute top-20  uppercase tracking-[4px] text-gray-500 text-sm'>
                Hover over a skill <text className='text-[#2ed3db] '>for</text> currency profiency
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />              
            </div>
        </motion.div>
  )
}

export default Skills