import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import linkStyles from '../components/header.module.scss'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi! I'm Steven, a full-stack developer.</h1>
      <h2>I created this website with GatsbyJS to serve as a home for my blog, this way you don't have to keep clearing your cookies on Medium.</h2>
      <p>Need a Developer? <Link to="/contact" className={linkStyles.linkItem}>Contact Me</Link></p>
      <p>I'm very active on <a href='https://www.twitter.com/senorr_ross' className={linkStyles.twitter}>Twitter</a>, follow me!</p>
    </Layout>
  )
}
export default IndexPage