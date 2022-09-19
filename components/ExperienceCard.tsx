import React from 'react'
import { motion } from "framer-motion";



type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
            }}
        transition={{duration:1.2}}
        whileInView={ {opacity:1, y : 0 }}
        viewport={{ once:true }}        
        className='w-64 h-64 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
        src="softuni.png" 
        alt='' 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>JS Advanced student </h4>
            <p className='font-bold text-2xl mt-1'> SOFTUNI</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-16 w-16 rounded-full'
                src="autocad.png" 
                alt=""
                 />
                <img 
                className='h-16 w-16 rounded-full'
                src="ps.png" 
                alt=""
                 />
                <img 
                className='h-16 w-16 rounded-full'
                src="javascript.png" 
                alt=""
                 />
            </div>
            <p className='uppercase py-5 text-gray-300'> Started studies 01/2022 - Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg '>   {/* 1.4.05.*/}
                    <li>January Programing Basics Javascript - 600/600</li>
                    <li>May Programing Fundaments Javascript - Mid Exam - 300/300</li>
                    <li>May Programing Fundaments Javascript - Final Score - 5.5</li>
                    <li>September Programing Advanced JS - Mid Exam - TBA</li>
                    <li>Octomber Programing Applications JS - Exam - TBA</li>
                </ul>
        </div>
    </article>
  ) 
}