import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper open={open}>
      <S.Nav>
        <S.Items>
          <S.MainMenu>
            <S.Logo>
              <img src="/img/logo.png" alt="Beer or Coffee" />
              <S.Icon data-testid="button" onClick={() => setOpen(!open)}>
                &#9776;
              </S.Icon>
            </S.Logo>
            <S.MenuItem>Espaços de Coworking</S.MenuItem>
            <S.MenuItem>Planos</S.MenuItem>
            <S.MenuItem>Descontos</S.MenuItem>
          </S.MainMenu>
          <S.UserMenu>
            <S.HeaderButton>Adiquirir um Plano</S.HeaderButton>
            <S.Subitem>Empresas</S.Subitem>
            <S.HeaderButton color="white">Oi, Thiago</S.HeaderButton>
          </S.UserMenu>
        </S.Items>
      </S.Nav>
    </S.Wrapper>
  )
}

export default Header
