import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration:1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-Kanit'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F74AB0]/20'>
                {projects.map((project,i)=>(
                    <div                   
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                        
                        initial=
                        {{
                            y:-300,
                            opacity:0,
                        }}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}} 
                        src='footer.jpg'
                        alt=''
                        
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl z-40'>
                            <h4 className='text-4xl font-semibold text-center'>
                            <span className=' decoration-[#F74AB0]/50 font-Kanit'> Case Study {i+1} of {projects.length} <text className='text-[#2ed3db]'>: </text>
                            </span>
                             Return Return 
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Of course the whole point of Lorem Ipsum is that the words aren't supposed to mean anything,
                                so attempting to divine its meaning is somewhat … unsatisfying, perhaps by design.
                                Lorem Ipsum is a specific form of what is generally referred to somewhat cheekily as "Greeking":
                            </p>
                        </div>
                    </div>
                ))}
            
                
            </div>

            <div className='w-full absolute top-[30%] bg-[#F74AB0]/10 left-0 h-[500px] -skew-y-12'></div> {/* Backgorund Line*/}

    </motion.div>
  )
}

export default Projects