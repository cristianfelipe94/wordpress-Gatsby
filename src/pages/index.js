import React from "react"
import Navbar from "../components/navbar"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {useStaticQuery, graphql} from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h2>{data.site.siteMetadata.description}</h2>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Navbar/>
    </Layout>
  )
}

export default IndexPage
