import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function NotFound() {
    return (
        <Layout>
            <Head title='404'/>
            <h1>Oops. You dun goofed!</h1>
            <img alt='whoops, so did we' src='https://www.thesprucepets.com/thmb/0qIT22rFdhQx9myQFvXduI2Tyxk=/1335x1001/smart/filters:no_upscale()/GettyImages-867302186-bb5f891abaad4c378b8b71c54c8940dd.jpg'/>
            <button><Link to='/' style={{textDecoration: 'none'}}>Head Home</Link></button>
        </Layout>
    )
}

export default NotFound
