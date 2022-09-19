import React from 'react';  //tfc      yarn add react-simple-typewriter  ///// yarn add react-simple-typewriter /// yarn run dev
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            
            <motion.div 
            initial={{
                x: -500,
                opacity:0,
                scale: 0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale: 1,
            }}
            transition={{
                duration:1.3,
            }}
            className='flex flex-row items-center'
            >
                <SocialIcon
                    url="https://github.com/panayotsky-dev"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon
                    url="https://linkedin.com/in/panayot-petkov"
                    fgColor='gray'
                    bgColor='transparent' />                
            </motion.div>
            <h2 className='text-center font-Kanit text-[#2ed3db] opacity-0  p-2 '>
            <Link href="#hero">
                /panayotsky.com/
                </Link>
                </h2>
            <Link href="#contactme">
            <motion.div 
            initial={{
                x: 500,
                opacity:0,
                scale: 0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale: 1,
            }}
            transition={{
                duration:1,
            }}
             className='flex flex-row item-center text-gray-300 cursor-pointer'
             >
                <SocialIcon
                    
                    className='cursor-pointer'                    
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 text-center items-center p-2 hover:text-[#2ed3db] hover:animate-spin focus-within:shadow-lg'>
                     Lets Get in Touch
                </p>
            </motion.div>
            </Link>
        </header>

    );
}