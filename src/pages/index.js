import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      category="Misc"
      date="22 de março de 2020"
      timeToRead="4"
      title="Meu primeiro post: o que esperar disto?"
      description="O começo de algo, um inicio para uma carreira de sucesso e muitos desafios."
    />
  </Layout>
)

export default IndexPage
