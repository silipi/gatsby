import React from "react"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          Gabriel Silipi
          <S.ProfilePosition>Desenvolvedor Frontend <span role="img" aria-label="rocket">🚀</span></S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>Um blog sobre tecnologias, design, meu cotidiano e assuntos diversos do universo.</S.ProfileDescription>
    </S.ProfileWrapper>
)


export default Profile
