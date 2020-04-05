import React from "react"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          Gabriel Silipi
          <S.ProfilePosition>
            Desenvolvedor Frontend
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        Um blog sobre tecnologia, programação, design, meu cotidiano e outras
        coisas do universo.
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
