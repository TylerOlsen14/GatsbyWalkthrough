import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from '../components/seo'

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="about" />
      <h1>Services page!!!</h1>
      <h3>This is what we serve:</h3>
      <h6>What do we do?</h6>
      <p>IDK</p>
      <p>
        <Link to="/">Here</Link> is home
      </p>
    </Layout>
  )
}

export default ServicesPage;