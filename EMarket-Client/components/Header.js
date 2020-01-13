import React from 'react'

import Logo from '../components/Logo'
import CompanyName from '../components/CompanyName'

function Header() {
    return (
        <header style = {{display: 'flex', backgroundColor: 'lightgreen'}}>
            <Logo />
            <CompanyName />
            {/* <Navbar /> */}
        </header>
    )
}

export default Header