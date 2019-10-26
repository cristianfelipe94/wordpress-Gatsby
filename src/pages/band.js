import React from "react"
import Navbar from "../components/navbar"

import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {useStaticQuery, graphql} from "gatsby"

const BandPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tool.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Tool</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <Navbar/>
    </Layout>
  )
}

export default BandPage
