import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {

  return (
    <Layout>
      <h2>Sup! I'm Steven, a full-stack developer with a love for the outdoors.</h2>
      <p>Need a Developer? <Link to="/contact">Contact Me</Link></p>
      <p>Chirp Chirp <a href='https://www.twitter.com/senorr_ross'>Follow Me On Twitter</a></p>
    </Layout>
  )

  // return (
  //   <div>
  //     <Header />
  //     <h2>Sup! I'm Todd, I like to party</h2>
  //     <p>Need a Developer? <Link to="/contact">Contact Me</Link></p>
  //     <p>Chirp Chirp <a href='https://www.twitter.com/senorr_ross'>Follow Me On Twitter</a></p>
  //     <Footer />
  //   </div>
  // )
}
export default IndexPage