import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Arrow from '../Arrow/Arrow'

const Header = () => {
    return (

        <header className='flex flex-col min-h-screen'>

            <Nav></Nav>
            <Hero></Hero>
            <Arrow></Arrow>

        </header>

    )
}

export default Header