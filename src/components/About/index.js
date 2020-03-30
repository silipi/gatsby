import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../Layout"
import SEO from "../seo"

import * as S from "./styled"

const AboutPage = () => {
  const { aboutImageOne } = useStaticQuery(
    graphql`
      query {
        aboutImageOne: file(relativePath: { eq: "about1.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Sobre mim" />
      <S.AboutWrapper>
        <S.AboutTitle>Teste</S.AboutTitle>
        <S.AboutHeader>
          <S.AboutHeaderText>
            Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse
            platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non
            vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Proin bibendum ullamcorper rutrum.
          </S.AboutHeaderText>
          <S.AboutHeaderImage fixed={aboutImageOne.childImageSharp.fixed} />
        </S.AboutHeader>
      </S.AboutWrapper>
    </Layout>
  )
}

export default AboutPage
