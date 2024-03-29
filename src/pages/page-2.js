import React from "react"
import Navbar from "../components/navbar"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Navbar/>
  </Layout>
)

export default SecondPage
