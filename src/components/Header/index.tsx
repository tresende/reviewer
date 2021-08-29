import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)
  const backgroundClasses = `animate__animated ${open ? 'animate__bounceInDown' : ''} `

  return (
    <S.Wrapper open={open}>
      <S.Nav>
        <S.Items>
          <S.MainMenu>
            <S.Logo>
              <img src="/img/logo.png" alt="Beer or Coffee" />
              <S.Icon data-testid="open-menu" onClick={() => setOpen(!open)}>
                &#9776;
              </S.Icon>
            </S.Logo>
            <S.MenuItem className={backgroundClasses}>Espaços de Coworking</S.MenuItem>
            <S.MenuItem className={backgroundClasses}>Planos</S.MenuItem>
            <S.MenuItem className={backgroundClasses}>Descontos</S.MenuItem>
          </S.MainMenu>
          <S.UserMenu className={backgroundClasses}>
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
