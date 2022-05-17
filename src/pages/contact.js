import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import linkStyles from "../components/header.module.scss"

function ContactPage() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          portfolio
          linkedIn
          email
          twitter
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
        <li style={{ listStyleType: "none" }}>
          LinkedIn:{" "}
          <a href={info.linkedIn} className={linkStyles.linkItem}>
            {info.linkedIn}
          </a>
        </li>
        <li style={{ listStyleType: "none" }}>
          Portfolio:{" "}
          <a href={info.portfolio} className={linkStyles.linkItem}>
            {info.portfolio}
          </a>
        </li>
        <li style={{ listStyleType: "none" }}>
          Twitter:{" "}
          <a href={info.twitter} className={linkStyles.linkItem}>
            {info.twitter}
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
