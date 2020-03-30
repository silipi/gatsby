import styled from "styled-components"
import Img from "gatsby-image"

export const AboutWrapper = styled.div`
  padding: 1rem;
`

export const AboutTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.06rem;
`

export const AboutHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const AboutHeaderText = styled.p`
  letter-spacing: 0.06rem;
`

export const AboutHeaderImage = styled(Img)`
  height: 250px;
  width: 200px;
`
