import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiSass, SiReact, SiNodedotjs, SiGit, SiFigma, SiNpm, SiTailwindcss, SiFirebase } from "react-icons/si";

const About = () => {
    return (

        <div className="container flex flex-col gap-12 justify-center lg:grid grid-rows-2 grid-cols-2 grid-flow-row lg:gap-8">

            <div className="flex flex-col items-start justify-center gap-12 lg:gap-6 lg:row-span-1">
                <h2 className='text-white text-3xl font-semibold border-b-4 border-purple-500 pb-2'>Sobre mi.</h2>

                <p className='text-white text-xl'>Trabajo con tecnologías como JavaScript, React, Next.js, TypeScript, HTML, CSS, Tailwind, Sass, entre otras.</p>

                <p className='text-white text-xl'>Hice cursos en Platzi, Udemy, LeonidasEsteban y Coderhouse.</p>

            </div>

            <div className="flex items-center justify-center row-span-2">
                <img src="./diploma.png" alt="" className='sm:w-8/12 lg:w-11/12' />
            </div>

            <div className="flex flex-col justify-center gap-12 lg:gap-6 lg:row-span-1">

                <h2 className='text-white text-3xl font-semibold border-b-4 border-purple-500 pb-2 self-start'>Skills.</h2>

                <div className='grid grid-cols-4 items-center justify-items-center gap-8 lg:grid-cols-6'>
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