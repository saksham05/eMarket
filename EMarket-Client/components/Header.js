import React, {Component} from 'react'

import Logo from '../components/Logo'
import CompanyName from '../components/CompanyName'

class Header extends Component {
    render() {
        return (
        <header style = {{display: 'flex', backgroundColor: 'lightgreen'}}>
            <Logo />
            <CompanyName />
            {/* <Navbar /> */}
        </header>
        )
    }
}

export default Header