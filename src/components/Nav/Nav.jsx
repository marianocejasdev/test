import React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Nav = () => {

    return (

        <nav className='container flex items-center justify-between py-4 text-white'>

            <a href="#" className='font-medium md:text-xl'>Mariano Cejas</a>

            <div className='hidden sm:flex items-center justify-center gap-4 md:text-lg'>
                <a href="#">Inicio.</a>
                <a href="#">Sobre mi.</a>
                <a href="#">Proyectos.</a>
                <a href="#">Contacto.</a>
                <a href="#" className='text-white'><SiLinkedin></SiLinkedin></a>
                <a href="#" className='text-white'><SiGithub></SiGithub></a>
            </div>

            <a href="#" className='text-purple-500 text-3xl sm:hidden'><HiMenuAlt3></HiMenuAlt3></a>

            <a href="#" className='hidden text-white text-3xl'><HiX></HiX></a>

        </nav>

    )
}

export default Nav