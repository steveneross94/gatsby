import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import linkStyles from '../components/header.module.scss'

function ContactPage() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    portfolio,
                    linkedIn,
                    email
                }
            }
        }
    `)

    const info = data.site.siteMetadata

    return (
        <Layout>
            <Head title="Contact" />
            <h1>My Contact Info</h1>
            <ul>
                <li style={{listStyleType: 'none'}}>
                    Email: <a href={`mailto:` + info.email} className={linkStyles.linkItem}>
                        {info.email}</a>
                </li>
                <li style={{listStyleType: 'none'}}>
                    LinkedIn: <a href={info.linkedIn} className={linkStyles.linkItem}>
                        {info.linkedIn}</a>
                </li>
                <li style={{listStyleType: 'none'}}>
                    Portfolio: <a href={info.portfolio} className={linkStyles.linkItem}>
                        {info.portfolio}</a>
                </li>
            </ul>
        </Layout>
    )
}

export default ContactPage
