import React from 'react'

import { Home } from "@styled-icons/material-rounded/Home"
import { Search } from "@styled-icons/material/Search"
import { Lightbulb as Light} from "@styled-icons/typicons/Lightbulb"
import { UpArrow as Arrow } from "@styled-icons/boxicons-solid/UpArrow"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para Home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
                <S.MenuBarItem title="Alternar o tema"><Light /></S.MenuBarItem>
                <S.MenuBarItem title="Alternar a visualização"><Grid /></S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar