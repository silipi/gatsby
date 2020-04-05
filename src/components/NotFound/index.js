import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const NotFound = () => {
  const { notFoundImage } = useStaticQuery(
    graphql`
      query {
        notFoundImage: file(
          relativePath: { eq: "undraw-under-construction.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <S.NotFoundWrapper>
      <S.NotFoundImage fluid={notFoundImage.childImageSharp.fluid} />
      <S.NotFoundTitle>Esta página ainda está sob construção.</S.NotFoundTitle>
      <S.NotFoundText>
        Parece que você está perdido neste pequeno blog...
      </S.NotFoundText>
    </S.NotFoundWrapper>
  )
}

export default NotFound
