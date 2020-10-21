import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

function AboutPage() {
    return (
        <Layout>
            <h1>About Me</h1>
            <h2>I like to snowboard, write code, and play games.</h2>
            <p>Need more info? <Link to='/contact'>Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage
