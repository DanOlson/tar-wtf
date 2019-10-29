import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CommandLineBuilder from '../components/command-line-builder'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Tar is a Unix command line utility for working with compressed archives.
      It's great at what it does, but it can be really hard to remember how use.
      Hopefully, this command line builder will save you some time.
    </p>
    <div style={{ marginBottom: `1.45rem` }}>
      <CommandLineBuilder />
    </div>
  </Layout>
)

export default IndexPage
