import React from 'react'


import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi! I'm Steven, a full-stack developer.</h1>
      <p>I created this website with GatsbyJS to serve as a home for my blog, this way you don't have to keep clearing your cookies on Medium.</p>
    </Layout>
  )
}
export default IndexPage