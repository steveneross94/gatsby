import React from 'react'
import { Link } from 'gatsby'

function Header() {
    return (
        <header>
            <h1>Todd's Party Shack</h1>
            <nav>
                <ul>
                    <li style={{listStyleType: 'none'}}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
