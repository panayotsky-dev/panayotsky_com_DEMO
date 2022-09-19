import Link from 'next/link';
import React from 'react';                           /* trf -> tsrfc  react-simple-typewriter*/
import { Cursor, useTypewriter } from 'react-simple-typewriter'; 
import BackgroundCircles from './BackgroundCircles';
    /*after install add this line,not from documentation ( Cursor, useTypewriter)*/

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Panayot Petkov",
         "Guy-who-constructs-furnitures",
    "<ButLovesTo{Code}Also/>",
    ],       
    loop: true,
    delaySpeed:1500,
    
    });
  return(
    
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>        
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="profilePic.jpg"
            alt=""
            />     
        <div className="z-20">                   
            <h3 className='text-xs uppercase text-purple-50 pb-2 tracking-[15px]'>Constructive Engineer</h3>
            <h3 className='text-xs uppercase text-purple-50 pb-2 tracking-[5px]'> Computer systems and technology engineer since <text className='text-[#2ed3db]  font-Kanit text-sm uppercase  tracking-[2px] '>2016</text></h3>
            <h5 className='text-xs uppercase text-purple-50 pb-2 tracking-[7px]'><text className='text-[#2ed3db] text-sm uppercase pb-2 font-Kanit tracking-[7px] '>JS</text> Developer Student and <text className='text-[#2ed3db] text-sm font-Kanit uppercase pb-2 tracking-[7px] '>CODE</text> Enthusiast</h5>
            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3'>{text}<text className='text-[#2ed3db]'>/</text></span>
                <Cursor cursorColor='#d106ca'/>
            </h1>
            <div className='pt-5 font-Kanit'>
                <Link href="#about">
                    <button className='heroButton '>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton '>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
            
    </div>
    </div>
  );
}
