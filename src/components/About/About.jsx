import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiSass, SiReact, SiNodedotjs, SiGit, SiFigma, SiNpm, SiTailwindcss, SiFirebase } from "react-icons/si";

const About = () => {
    return (

        <div className="container flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start gap-y-12">

            <div className='flex flex-col items-start justify-center gap-12 md:order-1 md:w-6/12 md:gap-6'>

                <h2 className='text-white text-2xl font-semibold border-b-4 border-purple-500 pb-2 self-start'>Sobre mi.</h2>
                <p className='text-white text-xl'>Trabajo con tecnologías como JavaScript, React, Next.js, TypeScript, HTML, CSS, Tailwind, Sass, entre otras.</p>
                <p className='text-white text-xl'>Hice cursos en Platzi, Udemy, LeonidasEsteban y Coderhouse.</p>

            </div>

            <div className='flex items-center justify-center md:order-2 sm:w-8/12 sm:self-center md:w-6/12'>

                <img src="./diploma.png" alt="" />

            </div>

            <div className='flex flex-col justify-center gap-12 md:order-3 md:w-6/12'>

                <h2 className='text-white text-2xl font-semibold border-b-4 border-purple-500 pb-2 self-start'>Skills.</h2>

                <div className="grid grid-cols-4 items-center justify-items-center gap-8">
                    <i className='text-white text-4xl'><SiHtml5></SiHtml5></i>
                    <i className='text-white text-4xl'><SiCss3></SiCss3></i>
                    <i className='text-white text-4xl'><SiJavascript></SiJavascript></i>
                    <i className='text-white text-4xl'><SiBootstrap></SiBootstrap></i>
                    <i className='text-white text-4xl'><SiSass></SiSass></i>
                    <i className='text-white text-4xl'><SiReact></SiReact></i>
                    <i className='text-white text-4xl'><SiNodedotjs></SiNodedotjs></i>
                    <i className='text-white text-4xl'><SiGit></SiGit></i>
                    <i className='text-white text-4xl'><SiFigma></SiFigma></i>
                    <i className='text-white text-4xl'><SiNpm></SiNpm></i>
                    <i className='text-white text-4xl'><SiTailwindcss></SiTailwindcss></i>
                    <i className='text-white text-4xl'><SiFirebase></SiFirebase></i>
                </div>

            </div>

        </div>

    )
}

export default About