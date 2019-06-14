import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () =>(
    <Layout>
      <SEO title="about" />
      <h1>About page!!!</h1>
      <h3>This is what we're about:</h3>
      <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat placeat dignissimos numquam sapiente ex tempore, ullam vel quisquam delectus eaque voluptates sed reprehenderit incidunt cum et magnam sunt facere saepe.</h6>
    </Layout>
  )

export default AboutPage;