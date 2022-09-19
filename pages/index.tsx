import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contactme from '../components/Contactme'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F74AB0]/20'>
      <Head>
        <title>Panayotsky#Dev</title>
        
       
      </Head>

      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section id="hero" className='snap-center'>
      <Hero />
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* EXPERIENCE */}
      <section id='experience' className='snap-center'>
        <Experience />
        
      </section>
      {/* SKILLS */}
      <section id='skills' className='snap-center'>
        <Skills />
        
      </section>
      {/* PROJECTS */}
      <section id='projects' className='snap-start'>
        <Projects />
        
      </section>
      <section id='contactme' className='snap-start'>
        <Contactme />
        
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-ful cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src="footer.jpg"
           alt=""
            />
           
        </div>
        </footer></Link>
      {/* CONTACT ME */}

    </div>
  )
}

export default Home
