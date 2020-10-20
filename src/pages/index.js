import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h2>Sup! I'm Todd, I like to party</h2>
      <p>Need a Developer? <Link to="/contact">Contact Me</Link></p>
      <p>Chirp Chirp <a href='https://www.twitter.com/senorr_ross'>Follow Me On Twitter</a></p>
      <Footer />
    </div>
  )
}
export default IndexPage