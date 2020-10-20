import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

function AboutPage() {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <h2>I like to code and snowboard</h2>
            <p>Need more info? <Link to='/contact'>Contact Me</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage
