import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {

  return (
    <Layout>
      <h1>Sup! I'm Steven, a full-stack developer with a love for the outdoors.</h1>
      <h5>This is a webpage I created with GatsbyJS to serve as a home for my blog, this way you don't have to keep clearing your cookies on Medium</h5>
      <p>Need a Developer? <Link to="/contact">Contact Me</Link></p>
      <p>I'm very active on <a href='https://www.twitter.com/senorr_ross'>Twitter</a>, follow me!</p>
    </Layout>
  )
}
export default IndexPage