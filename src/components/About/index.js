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
        <S.AboutTitle>Sobre mim</S.AboutTitle>
        <S.AboutHeader>
          <S.AboutHeaderText>
            Meu nome é Gabriel Silipi, tenho 20 anos, moro em Cascavel - PR e
            atualmente trabalho como Analista de Suporte. Sou apaixonado por
            programação, matemática, designs minimalistas e criações de
            projetos.
          </S.AboutHeaderText>
          <S.AboutHeaderImage fixed={aboutImageOne.childImageSharp.fixed} />
        </S.AboutHeader>
      </S.AboutWrapper>
    </Layout>
  )
}

export default AboutPage
