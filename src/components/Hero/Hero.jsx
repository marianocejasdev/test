import React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si";

const Hero = () => {

    return (

        <div className="container flex-1 flex flex-col md:flex-row items-center justify-center lg:justify-around gap-12">

            <img src="./picture.png" alt="Mariano Cejas - Foto de Perfil" className='w-52 md:order-2 md:w-64 lg:w-80' />

            <div className='flex flex-col items-center md:items-start justify-center gap-12 md:order-1'>

                <div className='flex flex-col gap-4 text-white'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>¡Hola! 👋</h2>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'><span className="font-normal">Soy</span> Mariano Cejas</h1>
                    <h2 className='text-2xl lg:text-3xl font-normal'><span className='text-purple-500 font-semibold'>Frontend Developer</span> from<br />Buenos Aires, Argentina.</h2>
                </div>

                <div className='flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-center'>

                    <div className="flex gap-12 md:gap-6 items-center justify-center md:order-2">
                        <a href="#" className='text-white text-2xl'><SiLinkedin></SiLinkedin></a>
                        <a href="#" className='text-white text-2xl'><SiGithub></SiGithub></a>
                    </div>

                    <button className='flex items-center justify-between gap-4 bg-purple-500 py-2 px-4 rounded-lg text-white font-medium md:order-1'>Descargar CV</button>

                </div>

            </div>

        </div>

    )
}

export default Hero