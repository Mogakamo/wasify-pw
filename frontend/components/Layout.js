import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Hero from './Hero'

function Layout({children}) {
    return (
        <div>
            <NavBar />
            <Hero />
            <Notify />
            {children}
            
        </div>
    )
}

export default Layout
