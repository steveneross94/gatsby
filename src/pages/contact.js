import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
// import linkStyles from '../components/header.module.scss'

function ContactPage() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    phone,
                    portfolio,
                    linkedIn,
                    email
                }
            }
        }
    `)

    const info = data.site.siteMetadata

    // const myInfo = {
    //     phone: '347-497-0802',
    //     email: 'ross.stevenedward@gmail.com',
    //     linkedIn: 'www.linkedin.com/in/steveneross1'
    // }

    // const postMyInfo = (myInfo) => {
    //     return (
    //         Object.keys(myInfo).map((item, i) => {
    //             return (
    //                 <ul>
    //                     <li style={{ listStyleType: "none" }} key={i}>{item.charAt(0).toUpperCase() + item.slice(1)}: {myInfo[item]}</li>
    //                 </ul>
    //             )
    //         })
    //     )
    // }

    return (
        <Layout>
            <h1>My Contact Info</h1>
            <ul>
                <li style={{listStyleType: 'none'}}>
                    Phone: {info.phone}
                </li>
                <li style={{listStyleType: 'none'}}>
                    Email: <a href={`mailto:` + info.email}>
                        {info.email}</a>
                </li>
                <li style={{listStyleType: 'none'}}>
                    LinkedIn: <a href={info.linkedIn}>
                        {info.linkedIn}</a>
                </li>
                <li style={{listStyleType: 'none'}}>
                    Portfolio: <a href={info.portfolio}>
                        {info.portfolio}</a>
                </li>
            </ul>
        </Layout>
    )
}

export default ContactPage
